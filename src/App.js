import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'
import PaletteList from './components/PaletteList'
import seedPalettes from './seedPalettes'
import { generatePalette } from './colorHelpers'
import ColorProvider from './contexts/ColorContext'

function App() {
  const findPalette = id => {
    return seedPalettes.find(palette => {
      return palette.id === id
    })
  }

  return (
    <ColorProvider>
      <Switch>
        <Route
          exact
          path='/'
          render={routeProps => (
            <PaletteList palettes={seedPalettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
      </Switch>
    </ColorProvider>
  )
}

export default App
