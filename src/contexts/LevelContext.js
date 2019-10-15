import React, { createContext } from 'react'
import useLevel from '../hooks/useLevel'

export const LevelContext = createContext()

const LevelProvider = props => {
  const levelStuff = useLevel(500)

  return (
    <LevelContext.Provider value={levelStuff}>
      {props.children}
    </LevelContext.Provider>
  )
}

export default LevelProvider
