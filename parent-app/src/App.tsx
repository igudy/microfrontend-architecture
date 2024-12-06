import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>Welcome to the Blog Home Page!</h1>
    <p>Discover the latest blog posts here.</p>
  </div>
  )
}

export default App
