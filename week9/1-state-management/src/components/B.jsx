import {useContext} from 'react'
import {CounterContext} from "../contexts/CounterContext.js"
import {UserContext} from "../contexts/UserContext.js"
import { useTest } from '../store/TestStore.js'
const B = () => {

    // const {x, incrementX, decrementX} = useTest()
    console.log("b")
    const x = useTest(state => state.x);
    const incrementX = useTest(state => state.incrementX);
    const decrementX = useTest(state => state.decrementX)

  const {counter1, changeCounter1} = useContext(CounterContext)
  const {user,changeUser} = useContext(UserContext)

  return (
    <div  className='w-80 shadow-2xl p-5'>
      <h1>component B</h1>
      <p>counter1: {counter1}</p>
      <button className='bg-gray-500 text-white p-2 rounded-2xl' onClick={changeCounter1}>change</button>
      <h1>User name : {user.name}</h1>
      <p>age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button className='bg-gray-500 text-white p-2 rounded-2xl' onClick={changeUser}>change age</button>

      <p className='text-red-600'>X is {x}</p>
      <button className='bg-gray-500 text-white p-2 rounded-2xl mb-2' onClick={incrementX}>IncrementX</button>
      <button className='bg-gray-500 text-white p-2 rounded-2xl' onClick={decrementX}>decrementX</button>
    </div>
  )
}

export default B
