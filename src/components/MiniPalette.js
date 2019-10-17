import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    margin: '2px 0',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: 'grey',
    height: '150px',
    width: '100%'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
    '& span': {
      marginLeft: '0.5rem',
      fontSize: '1.5rem'
    }
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px'
  }
}

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
