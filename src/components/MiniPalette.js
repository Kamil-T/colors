import React, { memo } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'
import useToggle from '../hooks/useToggle'

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
  const [open, toggle] = useToggle(false)

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

  const toggleDialog = e => {
    e.stopPropagation()
    toggle()
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
        onClick={e => toggleDialog(e)}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </h5>
      <Dialog
        open={open}
        aria-labelledby='delete-dialog-title'
        onClose={e => toggleDialog(e)}>
        <DialogTitle id='delete-dialog-title'>Delete this Palette?</DialogTitle>
        <List>
          <ListItem button onClick={e => deletePalette(e, id)}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon on />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Delete' />
          </ListItem>
          <ListItem button onClick={e => toggleDialog(e)}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Cancel' />
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

export default memo(withStyles(styles)(MiniPalette))
