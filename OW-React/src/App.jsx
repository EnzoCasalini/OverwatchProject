import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapsList from "./MapsPage/MapsList/MapsList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <MapsList/>
  )
}

export default App
