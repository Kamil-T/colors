import { useState } from 'react'

export default initialState => {
  const [state, setState] = useState(initialState)
  return [state, setState]
}
