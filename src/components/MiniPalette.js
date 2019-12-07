import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'

const MiniPalette = ({
  classes,
  paletteName,
  emoji,
  colors,
  id,
  history,
  palettes,
  setPalettes
}) => {
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

  const deletePalette = (e, id) => {
    e.stopPropagation()
    setPalettes(palettes.filter(palette => palette.id !== id))
  }

  return (
    <div className={classes.root} onClick={() => goToPalette(id)}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: 'all 0.3s ease-in-out' }}
        onClick={e => deletePalette(e, id)}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
