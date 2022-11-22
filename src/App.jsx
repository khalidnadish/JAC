import { useState } from 'react'
import MainMenu from './component/menu/MainMenu'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <MainMenu/>
    </>
  )
}

export default App
