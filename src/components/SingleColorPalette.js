import React, { useContext } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { FormatContext } from '../contexts/ColorContext'
import PaletteFooter from './PaletteFooter'

const SingleColorPalette = ({ palette, colorId }) => {
  const [format] = useContext(FormatContext)
  const { paletteName, emoji } = palette

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
    <div className='Palette'>
      <Navbar showingLevel={false} />
      <div className='Palette-colors'>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}

export default SingleColorPalette
