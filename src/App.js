import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'
import PaletteList from './components/PaletteList'
import SingleColorPalette from './components/SingleColorPalette'
import { generatePalette } from './colorHelpers'
import NewPaletteForm from './components/NewPaletteForm'
import { PalettesContext } from './contexts/PalettesContext'

function App() {
  const [palettes] = useContext(PalettesContext)

  const findPalette = id => {
    return palettes.find(palette => {
      return palette.id === id
    })
  }

  return (
    <Switch>
      <Route
        exact
        path='/'
        render={routeProps => <PaletteList {...routeProps} />}
      />
      <Route
        exact
        path='/palette/new'
        render={routeProps => <NewPaletteForm {...routeProps} />}
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
  )
}

export default App
