import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useStyles } from '../styles/NewPaletteFormStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import useInputState from '../hooks/useInputState'
import { PalettesContext } from '../contexts/PalettesContext'
import { ColorsContext, OpenContext } from '../contexts/NewPaletteContext'

const PaletteFormNav = ({ history }) => {
  const classes = useStyles()
  const [palettes, setPalettes] = useContext(PalettesContext)
  const [newPaletteName, setPaletteName] = useInputState('')
  const [colors] = useContext(ColorsContext)
  const [open, setOpen] = useContext(OpenContext)

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    )
  }, [palettes])

  const handleDrawerOpen = () => {
    setOpen(true)
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

  return (
    <div>
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
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navForm}>
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
          <Link to='/'>
            <Button variant='contained' color='secondary'>
              Go back
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  )
}

export default PaletteFormNav
