import React from 'react'
import Palette from './components/Palette'
import seedPalettes from './seedPalettes'
import { generatePalette } from './colorHelpers'
import ColorProvider from './contexts/ColorContext'

function App() {
  return (
    <ColorProvider>
      <div className='Palette'>
        <Palette palette={generatePalette(seedPalettes[4])} />
      </div>
    </ColorProvider>
  )
}

export default App
