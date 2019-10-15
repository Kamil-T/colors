import React from 'react'
import Palette from './components/Palette'
import seedPalettes from './seedPalettes'
import { generatePalette } from './colorHelpers'
import LevelProvider from './contexts/LevelContext'

function App() {
  return (
    <LevelProvider>
      <div className='Palette'>
        <Palette palette={generatePalette(seedPalettes[4])} />
      </div>
    </LevelProvider>
  )
}

export default App
