import React, { createContext } from 'react'
import useInitialState from '../hooks/useInitialState'

export const LevelContext = createContext()
export const FormatContext = createContext()

const ColorProvider = props => {
  const levelStuff = useInitialState(500)
  const formatStuff = useInitialState('hex')

  return (
    <LevelContext.Provider value={levelStuff}>
      <FormatContext.Provider value={formatStuff}>
        {props.children}
      </FormatContext.Provider>
    </LevelContext.Provider>
  )
}

export default ColorProvider
