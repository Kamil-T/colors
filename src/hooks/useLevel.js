import { useState } from 'react'

export default initialLevel => {
  const [level, setLevel] = useState(initialLevel)
  return [level, setLevel]
}
