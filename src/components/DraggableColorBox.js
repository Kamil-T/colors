import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/DraggableColorBoxStyles'
import DeleteIcon from '@material-ui/icons/Delete'

const DraggableColorBox = SortableElement(
  ({ classes, color, name, deleteColorBox }) => {
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        <div className={classes.boxContent}>
          <span>{name}</span>
          <DeleteIcon className={classes.deleteIcon} onClick={deleteColorBox} />
        </div>
      </div>
    )
  }
)

export default withStyles(styles)(DraggableColorBox)
