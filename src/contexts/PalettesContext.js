import React, { createContext } from 'react'
import useInitialState from '../hooks/useInitialState'
import seedPalettes from '../seedPalettes'

export const PalettesContext = createContext()

const PalettesProvider = props => {
  const palettesStuff = useInitialState(seedPalettes)

  return (
    <PalettesContext.Provider value={palettesStuff}>
      {props.children}
    </PalettesContext.Provider>
  )
}

export default PalettesProvider
