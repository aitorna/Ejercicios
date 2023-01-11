import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Cabecera from './Cabecera'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
        <Cabecera />
        <div className="container">
        
          <div className="row">
            <div className="col">
              <Card/>
            </div>
            <div className="col">
              <Card/>
            </div>
            <div className="col">
              <Card/>
            </div>
            <div className="col">
              <Card/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Card/>
            </div>
            <div className="col">
              <Card/>
            </div>
            <div className="col">
              <Card/>
            </div>
            <div className="col">
              <Card/>
            </div>
          </div>
        </div>
    </>
   
  )
}

export default App
