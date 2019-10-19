import React, { useContext } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import { LevelContext, FormatContext } from '../contexts/ColorContext'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'

const Palette = ({ palette }) => {
  const [level] = useContext(LevelContext)
  const [format] = useContext(FormatContext)
  const { colors, paletteName, emoji, id } = palette

  const colorBoxes = colors[level].map(color => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${id}/${color.id}`}
      showLink
    />
  ))

  return (
    <div className='Palette'>
      <Navbar showingLevel />
      <div className='Palette-colors'>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}

export default Palette
