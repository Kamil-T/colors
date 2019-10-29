import React, { useContext } from 'react'
import clsx from 'clsx'
import { useStyles } from '../styles/NewPaletteFormStyles'
import DraggableColorList from './DraggableColorList'
import PaletteFormNav from './PaletteFormNav'
import ColorPickerSidebar from './ColorPickerSidebar'
import { ColorsContext, OpenContext } from '../contexts/NewPaletteContext'
import { arrayMove } from 'react-sortable-hoc'

const NewPaletteForm = ({ history }) => {
  const classes = useStyles()
  const [open] = useContext(OpenContext)
  const [colors, setColors] = useContext(ColorsContext)

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const updatedColors = arrayMove(colors, oldIndex, newIndex)
    setColors(updatedColors)
  }

  return (
    <div className={classes.root}>
      <PaletteFormNav history={history} />
      <ColorPickerSidebar history={history} />
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
