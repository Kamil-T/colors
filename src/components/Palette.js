import React, { useContext } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import { LevelContext, FormatContext } from '../contexts/ColorContext'
import Navbar from './Navbar'

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
    />
  ))

  return (
    <div className='Palette'>
      <Navbar />
      <div className='Palette-colors'>{colorBoxes}</div>
      <footer className='Palette-footer'>
        {paletteName} <span className='emoji'>{emoji}</span>
      </footer>
    </div>
  )
}

export default Palette
