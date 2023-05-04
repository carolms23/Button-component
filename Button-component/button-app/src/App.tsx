import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/button'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button className="button"/>
    </div>
     
  )
}

export default App
