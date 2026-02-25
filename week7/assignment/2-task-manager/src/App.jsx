import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import TaskManager from './components/TaskManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-10'>
      <TaskManager />
    </div>
  )
}

export default App
