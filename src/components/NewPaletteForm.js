import React, { useState, useContext } from 'react'
import clsx from 'clsx'
import { useStyles } from '../styles/NewPaletteFormStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import DraggableColorList from './DraggableColorList'
import PaletteFormNav from './PaletteFormNav'
import ColorPickerSidebar from './ColorPickerSidebar'
import { ColorsContext, OpenContext } from '../contexts/NewPaletteContext'
import { arrayMove } from 'react-sortable-hoc'

const NewPaletteForm = ({ history }) => {
  const classes = useStyles()
  const [open, setOpen] = useContext(OpenContext)
  const [colors, setColors] = useContext(ColorsContext)

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const updatedColors = arrayMove(colors, oldIndex, newIndex)
    setColors(updatedColors)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <PaletteFormNav open={open} setOpen={setOpen} history={history} />
      <ColorPickerSidebar open={open} setOpen={setOpen} history={history} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}>
        <div className={classes.drawerHeader} />
        <DraggableColorList axis='xy' onSortEnd={onSortEnd} />
      </main>
    </div>
  )
}

export default NewPaletteForm
