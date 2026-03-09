import {useContext, useState, useRef, useEffect} from 'react'
import {CounterContext} from "../contexts/CounterContext.js"
import { useTest } from "../store/TestStore.js"

const C = () => {
    console.log("c")
    // const x = useTest(state=>state.x); // {x:10}
    // console.log("x is " + x)
    // console.log(useTest())
    // const {x, incrementX, decrementX} = useTest()
    const inputRef = useRef(null)
    const y = useTest(state => state.y);
    const incrementY = useTest(state => state.incrementY)
    const user = useTest(state => state.user)
    const changeName = useTest(state => state.changeName)
    const changeAge = useTest(state => state.changeAge)
    const {counter1, changeCounter1} = useContext(CounterContext)
    const [name, setname] = useState("")
    useEffect(()=>{
      inputRef.current.focus()
    },[])
  return (
    <div  className='w-80 shadow-2xl p-5'>
      <h1>component C</h1>
      <p>counter1: {counter1}</p>
      <button className='bg-gray-500 text-white p-2 rounded-2xl' onClick={changeCounter1}>change</button>
      <p className='text-red-600'>y is {y}</p>
      <button className='bg-gray-500 text-white p-2 rounded-2xl' onClick={incrementY}>IncrementY</button>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <input className='bg-gray-300' onChange={(e) => setname(e.target.value)} type="text" name='name' placeholder='enter name' />
      <button className='bg-gray-500 text-white p-2 rounded-2xl mb-2' onClick={() => changeName(name)}>change name</button>
      <button className='bg-gray-500 text-white p-2 rounded-2xl' onClick={() => changeAge(21)}>change age</button>
      <input ref={inputRef} type="text" />

    </div>
  )
}

export default C
