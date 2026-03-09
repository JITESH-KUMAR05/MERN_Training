import {useContext} from 'react'
import {CounterContext} from "../contexts/CounterContext.js"
import {UserContext} from "../contexts/UserContext.js"
const A = () => {
    console.log("A")
  const {counter1, changeCounter1} = useContext(CounterContext)
  const {user,changeUser} = useContext(UserContext)
  return (
    <div  className='w-80 shadow-2xl p-5'>
      <h1>component A</h1>
      <p>Counter1: {counter1}</p>
      <button className='bg-gray-500 text-white p-2 rounded-2xl' onClick={changeCounter1}>change</button>
      <h1>User name : {user.name}</h1>
      <p>age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button className='bg-gray-500 text-white p-2 rounded-2xl' onClick={changeUser}>change age</button>
    </div>
  )
}

export default A
