import React, { createContext } from 'react'
import seedPalettes from '../seedPalettes'
import useLocalStorageState from '../hooks/useLocalStorageState'

export const PalettesContext = createContext()

const PalettesProvider = props => {
  const palettesStuff = useLocalStorageState('palettes', seedPalettes)

  return (
    <PalettesContext.Provider value={palettesStuff}>
      {props.children}
    </PalettesContext.Provider>
  )
}

export default PalettesProvider
