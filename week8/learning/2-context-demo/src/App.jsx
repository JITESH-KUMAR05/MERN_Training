import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './components/A'
import B from './components/B'
import C from './components/C'

function App() {
  
  console.log("app")
  return (
    <div className='flex justify-evenly mt-10 text-2xl p-5'>
      
        <A    />
        <B  />
        <C  />

        
      
    </div>
  )
}

export default App
