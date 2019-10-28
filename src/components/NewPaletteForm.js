import React, { useState, useEffect, useContext } from 'react'
import clsx from 'clsx'
import { useStyles } from '../styles/NewPaletteFormStyles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Button from '@material-ui/core/Button'
import DraggableColorList from './DraggableColorList'
import PaletteFormNav from './PaletteFormNav'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { ChromePicker } from 'react-color'
import useInputState from '../hooks/useInputState'
import { PalettesContext } from '../contexts/PalettesContext'
import { arrayMove } from 'react-sortable-hoc'

const NewPaletteForm = ({ history }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [currentColor, setColor] = useState('teal')
  const [newColorName, setColorName, resetColorName] = useInputState('')
  const [palettes] = useContext(PalettesContext)
  const [colors, setColors] = useState(palettes[0].colors)
  const paletteFull = colors.length >= 20

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    )

    ValidatorForm.addValidationRule('isColorUnique', value =>
      colors.every(({ color }) => color !== currentColor)
    )
  }, [colors, currentColor])

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const updateCurrentColor = newColor => {
    setColor(newColor.hex)
  }

  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: newColorName
    }
    setColors([...colors, newColor])
    resetColorName()
  }

  const deleteColorBox = colorName => {
    const updatedColors = colors.filter(color => color.name !== colorName)
    setColors(updatedColors)
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const updatedColors = arrayMove(colors, oldIndex, newIndex)
    setColors(updatedColors)
  }

  const clearPalette = () => {
    setColors([])
  }

  const addRandomColor = () => {
    const allColors = palettes.map(p => p.colors).flat()
    let randNum = Math.floor(Math.random() * allColors.length)
    const randomColor = allColors[randNum]
    setColors([...colors, randomColor])
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <PaletteFormNav open={open} setOpen={setOpen} history={history} />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant='h4'>Design Your Palette</Typography>
        <div>
          <Button variant='contained' color='secondary' onClick={clearPalette}>
            Clear Palette
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={addRandomColor}
            disabled={paletteFull}>
            {paletteFull ? 'Palette Full' : 'Add Random Color'}
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newColorName}
            name='newColorName'
            onChange={setColorName}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'This field is required',
              'Color name must be unique',
              'Color already used!'
            ]}
          />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            disabled={paletteFull}
            style={{ backgroundColor: paletteFull ? 'grey' : currentColor }}>
            {paletteFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}>
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          deleteColorBox={deleteColorBox}
          axis='xy'
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  )
}

export default NewPaletteForm
