import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ComponenteDos from './ComponenteDos'
import ComponenteUno from './ComponenteUno'


function App() {

  return (
    <div>
      <ComponenteUno telefono = {666666666}/>
      <ComponenteDos telefono = {444444444}/>
    </div>
  )
}

export default App
