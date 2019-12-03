import React, { useEffect, useContext } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import useInputState from '../hooks/useInputState'
import { PalettesContext } from '../contexts/PalettesContext'
import { ColorsContext } from '../contexts/NewPaletteContext'

const PaletteMetaForm = ({ history, formShowing, setShowing }) => {
  const [colors] = useContext(ColorsContext)
  const [palettes, setPalettes] = useContext(PalettesContext)
  const [newPaletteName, setPaletteName] = useInputState('')

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    )
  }, [palettes])

  const handleClose = () => {
    setShowing(false)
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

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette])
  }

  return (
    <Dialog
      open={formShowing}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>Enter an unique palette name</DialogContentText>
          <TextValidator
            label='Palette Name'
            value={newPaletteName}
            name='newPaletteName'
            onChange={setPaletteName}
            fullWidth
            margin='normal'
            validators={['required', 'isPaletteNameUnique']}
            errorMessages={['Enter Palette Name', 'Name already used']}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button variant='contained' color='primary' type='submit'>
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  )
}

export default PaletteMetaForm
