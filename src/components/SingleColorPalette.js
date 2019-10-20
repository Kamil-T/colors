import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { FormatContext } from '../contexts/ColorContext'
import PaletteFooter from './PaletteFooter'

const SingleColorPalette = ({ palette, colorId }) => {
  const [format] = useContext(FormatContext)
  const { paletteName, emoji, id } = palette

  const gatherShades = (palette, filterByColor) => {
    let shades = []
    let allColors = palette.colors

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === filterByColor)
      )
    }

    return shades.slice(1)
  }
  const shades = gatherShades(palette, colorId)

  const colorBoxes = shades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showLink={false}
    />
  ))

  return (
    <div className='SingleColorPalette Palette'>
      <Navbar showingLevel={false} />
      <div className='Palette-colors'>
        {colorBoxes}
        <div className='go-back ColorBox'>
          <Link to={`/palette/${id}`} className='back-btn'>
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}

export default SingleColorPalette
