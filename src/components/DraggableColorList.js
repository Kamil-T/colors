import React, { useContext } from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import DraggableColorBox from './DraggableColorBox'
import { ColorsContext } from '../contexts/NewPaletteContext'

const DraggableColorList = SortableContainer(() => {
  const [colors, setColors] = useContext(ColorsContext)

  const deleteColorBox = colorName => {
    const updatedColors = colors.filter(color => color.name !== colorName)
    setColors(updatedColors)
  }

  return (
    <div style={{ height: '100%' }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          color={color.color}
          name={color.name}
          key={color.name}
          deleteColorBox={() => deleteColorBox(color.name)}
        />
      ))}
    </div>
  )
})

export default DraggableColorList
