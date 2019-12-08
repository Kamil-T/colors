import React, { useContext, memo } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteListStyles'
import { PalettesContext } from '../contexts/PalettesContext'

const PaletteList = ({ classes, history }) => {
  const [palettes, setPalettes] = useContext(PalettesContext)

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to='/palette/new'>Create palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              history={history}
              key={palette.id}
              {...palette}
              palettes={palettes}
              setPalettes={setPalettes}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(withStyles(styles)(PaletteList))
