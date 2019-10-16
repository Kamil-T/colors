import React, { useContext } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'
import { LevelContext, FormatContext } from '../contexts/ColorContext'

const Navbar = () => {
  const [level, setLevel] = useContext(LevelContext)
  const [format, setFormat] = useContext(FormatContext)

  const changeFormat = e => {
    setFormat(e.target.value)
  }

  return (
    <nav className='Navbar'>
      <div className='logo'>
        <a href='#'>reactcolorpicker</a>
      </div>
      <div className='slider-container'>
        <span>Level: {level}</span>
        <div className='slider'>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={setLevel}
            step={100}
          />
        </div>
      </div>
      <div className='select-container'>
        <Select value={format} onChange={changeFormat}>
          <MenuItem value='hex'>HEX - #ffffff</MenuItem>
          <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
    </nav>
  )
}

export default Navbar
