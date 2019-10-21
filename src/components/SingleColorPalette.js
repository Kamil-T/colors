import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteStyles'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { FormatContext } from '../contexts/ColorContext'
import PaletteFooter from './PaletteFooter'



const SingleColorPalette = ({ palette, colorId, classes }) => {
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
    <div className={classes.Palette}>
      <Navbar showingLevel={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`} className={classes.backBtn}>
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}

export default withStyles(styles)(SingleColorPalette)
