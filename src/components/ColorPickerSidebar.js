import React, { useState, useEffect, useContext } from 'react'
import { useStyles } from '../styles/NewPaletteFormStyles'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { ChromePicker } from 'react-color'
import useInputState from '../hooks/useInputState'
import { PalettesContext } from '../contexts/PalettesContext'
import { ColorsContext, OpenContext } from '../contexts/NewPaletteContext'

const ColorPickerSidebar = () => {
  const classes = useStyles()
  const [palettes] = useContext(PalettesContext)
  const [colors, setColors] = useContext(ColorsContext)
  const [open, setOpen] = useContext(OpenContext)
  const [currentColor, setColor] = useState('teal')
  const [newColorName, setColorName, resetColorName] = useInputState('')

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
      <div className={classes.container}>
        <Typography variant='h4' gutterBottom>
          Design Your Palette
        </Typography>
        <div className={classes.btns}>
          <Button
            variant='contained'
            color='secondary'
            className={classes.btn}
            onClick={clearPalette}>
            Clear Palette
          </Button>
          <Button
            variant='contained'
            color='primary'
            className={classes.btn}
            onClick={addRandomColor}
            disabled={paletteFull}>
            {paletteFull ? 'Palette Full' : 'Random Color'}
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newColorName}
            name='newColorName'
            placeholder='Color Name'
            variant='filled'
            margin='normal'
            className={classes.colorNameInput}
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
            className={classes.addColor}
            style={{ backgroundColor: paletteFull ? 'grey' : currentColor }}>
            {paletteFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    </Drawer>
  )
}

export default ColorPickerSidebar
