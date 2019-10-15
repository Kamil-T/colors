import React, { useContext } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import { LevelContext } from '../contexts/LevelContext'
import Navbar from './Navbar'

const Palette = ({ palette }) => {
  const [level] = useContext(LevelContext)

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox background={color.hex} name={color.name} />
  ))

  return (
    <div className='Palette'>
      <Navbar />
      <div className='Palette-colors'>{colorBoxes}</div>
    </div>
  )
}

export default Palette
