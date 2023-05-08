import { useState } from 'react'
import './App.css'
import Button from './components/Button/button'
import MenuList from './components/Menu/menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MenuList items={["Colors", "Typography","Spaces","Buttons","Inputs","Grid"]}/>
      <Button buttonList={["Default"]}/>
    </div>
     
  )
}

export default App
