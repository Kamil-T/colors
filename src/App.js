import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'
import PaletteList from './components/PaletteList'
import SingleColorPalette from './components/SingleColorPalette'
import seedPalettes from './seedPalettes'
import { generatePalette } from './colorHelpers'
import ColorProvider from './contexts/ColorContext'
import NewPaletteForm from './components/NewPaletteForm'

function App() {
  const [palettes, setPalettes] = useState(seedPalettes)

  const findPalette = id => {
    return palettes.find(palette => {
      return palette.id === id
    })
  }

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette])
    console.log(palettes)
  }

  return (
    <ColorProvider>
      <Switch>
        <Route
          exact
          path='/'
          render={routeProps => (
            <PaletteList palettes={palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/new'
          render={routeProps => (
            <NewPaletteForm savePalette={savePalette} {...routeProps} />
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
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    </ColorProvider>
  )
}

export default App
