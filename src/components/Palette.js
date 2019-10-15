import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Palette.css'

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)
  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox background={color.hex} name={color.name} />
  ))

  return (
    <div className='Palette'>
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        onAfterChange={setLevel}
        step={100}
      />
      <div className='Palette-colors'>{colorBoxes}</div>
    </div>
  )
}

export default Palette
