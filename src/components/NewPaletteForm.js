import React, { useState, useEffect, useContext } from 'react'
import clsx from 'clsx'
import { useStyles } from '../styles/NewPaletteFormStyles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Button from '@material-ui/core/Button'
import DraggableColorList from './DraggableColorList'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { ChromePicker } from 'react-color'
import useInputState from '../hooks/useInputState'
import { PalettesContext } from '../contexts/PalettesContext'
import { arrayMove } from 'react-sortable-hoc'

const NewPaletteForm = ({ history }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [currentColor, setColor] = useState('teal')
  const [colors, setColors] = useState([{ color: 'blue', name: 'blue' }])
  const [newColorName, setColorName, resetColorName] = useInputState('')
  const [newPaletteName, setPaletteName] = useInputState('')
  const [palettes, setPalettes] = useContext(PalettesContext)

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    )

    ValidatorForm.addValidationRule('isColorUnique', value =>
      colors.every(({ color }) => color !== currentColor)
    )

    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    )
  }, [colors, currentColor, palettes])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

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

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette])
  }

  const handleSubmit = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors: colors
    }
    savePalette(newPalette)
    history.push('/')
  }

  const deleteColorBox = colorName => {
    const updatedColors = colors.filter(color => color.name !== colorName)
    setColors(updatedColors)
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const updatedColors = arrayMove(colors, oldIndex, newIndex)
    setColors(updatedColors)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              label='Palette Name'
              value={newPaletteName}
              name='newPaletteName'
              onChange={setPaletteName}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
            />
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
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
          <Button variant='contained' color='secondary'>
            Clear Palette
          </Button>
          <Button variant='contained' color='primary'>
            Random Palette
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
            style={{ backgroundColor: currentColor }}>
            Add Color
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
