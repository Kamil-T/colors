import React, { useContext } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteStyles'
import ColorBox from './ColorBox'
import { LevelContext, FormatContext } from '../contexts/ColorContext'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'

const Palette = ({ palette, classes }) => {
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
    <div className={classes.Palette}>
      <Navbar showingLevel />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}

export default withStyles(styles)(Palette)
