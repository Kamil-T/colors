import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'
import PaletteList from './components/PaletteList'
import SingleColorPalette from './components/SingleColorPalette'
import { generatePalette } from './colorHelpers'
import NewPaletteForm from './components/NewPaletteForm'
import { PalettesContext } from './contexts/PalettesContext'
import ColorProvider from './contexts/ColorContext'
import NewPaletteProvider from './contexts/NewPaletteContext'

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
        render={routeProps => (
          <NewPaletteProvider>
            <NewPaletteForm {...routeProps} />
          </NewPaletteProvider>
        )}
      />
      <Route
        exact
        path='/palette/:id'
        render={routeProps => (
          <ColorProvider>
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          </ColorProvider>
        )}
      />
      <Route
        exact
        path='/palette/:paletteId/:colorId'
        render={routeProps => (
          <ColorProvider>
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          </ColorProvider>
        )}
      />
    </Switch>
  )
}

export default App
