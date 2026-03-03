import {useContext} from 'react'
import {CounterContext} from "../contexts/CounterContext.js"

const C = () => {
    console.log("C")

    const {counter1, changeCounter1} = useContext(CounterContext)
  return (
    <div  className='w-80 shadow-2xl p-5'>
      <h1>component C</h1>
      <p>counter1: {counter1}</p>
      <button className='bg-gray-500 text-white p-2 rounded-2xl' onClick={changeCounter1}>change</button>
    </div>
  )
}

export default C
