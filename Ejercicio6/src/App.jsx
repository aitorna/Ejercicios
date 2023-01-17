import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Contador from './Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Contador />
    </div>
  )
}

export default App
