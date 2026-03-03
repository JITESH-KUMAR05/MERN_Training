import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterContextProvider from './contexts/CounterContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  
    
    <CounterContextProvider>
      {/* wrap root component with provider */}
        <App />
    </CounterContextProvider>
  
)
