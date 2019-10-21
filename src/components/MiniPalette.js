import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/MiniPaletteStyles'

const MiniPalette = ({ classes, paletteName, emoji, colors, id, history }) => {
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ))

  const goToPalette = id => {
    return history.push(`/palette/${id}`)
  }

  return (
    <div className={classes.root} onClick={() => goToPalette(id)}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
