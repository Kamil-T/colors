import React, { createContext } from 'react'
import useInitialState from '../hooks/useInitialState'
import seedPalettes from '../seedPalettes'

export const ColorsContext = createContext()
export const OpenContext = createContext()

const NewPaletteProvider = props => {
  const colorsStuff = useInitialState(seedPalettes[0].colors)
  const openStuff = useInitialState(false)

  return (
    <ColorsContext.Provider value={colorsStuff}>
      <OpenContext.Provider value={openStuff}>
        {props.children}
      </OpenContext.Provider>
    </ColorsContext.Provider>
  )
}

export default NewPaletteProvider
