import './App.css'
import Test1 from './components/Test1'

function App() {

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-4xl'>Welcome to React</h1>
        <Test1 message="Good Morning" /> 
        <Test1 message="Good Afternoon" /> 
        <Test1 message="Good night" /> 
      </div>
    </div>
  )
}

export default App
