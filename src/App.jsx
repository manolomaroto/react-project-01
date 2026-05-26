import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Presentacion from './Presentacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Presentacion frase="hello, hello!" />
      </div>
    </>
  )
}

export default App
