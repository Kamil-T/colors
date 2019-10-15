import React from 'react'
import Palette from './components/Palette'
import seedPalettes from './seedPalettes'
import { generatePalette } from './colorHelpers'

function App() {
  console.log(generatePalette(seedPalettes[4]))
  return (
    <div className='Palette'>
      <Palette palette={generatePalette(seedPalettes[4])} />
    </div>
  )
}

export default App
