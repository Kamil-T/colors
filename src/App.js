import React from 'react'
import Palette from './components/Palette'
import seedPalettes from './seedPalettes'

function App() {
  return (
    <div className='Palette'>
      <Palette {...seedPalettes[4]} />
    </div>
  )
}

export default App
