import React, { useContext } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'
import { LevelContext } from '../contexts/LevelContext'

const Navbar = () => {
  const [level, setLevel] = useContext(LevelContext)
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
    </nav>
  )
}

export default Navbar
