import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-3.5px'
  }
}

const DraggableColorBox = ({ color, name, classes }) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {name}
      {color}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)
