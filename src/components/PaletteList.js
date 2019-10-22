import React from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteListStyles'

const PaletteList = ({ palettes, classes, history }) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to='/palette/new'>Create palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette history={history} key={palette.id} {...palette} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)