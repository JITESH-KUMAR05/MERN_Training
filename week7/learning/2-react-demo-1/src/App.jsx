import { useState } from "react";
import "./App.css"
function App(){
  // state
  let username = "ravi";
  let person = {
    pid:100,
    name:"bhanu"
  }
  let marks = [60,50,70,90,60]


  const test1 = () => {
    console.log("test1 called")
  }

  const test2 = (a) => {
    console.log(`test 2 is called and a is ${a}`)
    
  }


  let [cntVal, setCntVal] = useState(0)

  const incrementCnt = () => {
    console.log(cntVal)
    setCntVal(cntVal+1);
  }

  const resetCnt = () => {
    setCntVal(0);
  }

  // return a react element

  return(
    <div className="text-center">
      <h1 className="text-blue-800 text-4xl">Welcome to react</h1>

      {/* display the username */}

      <h2 className="text-4xl">username : {username}</h2>

      {/* display the person object */}
      <h2>
        {person.pid}
      </h2>
      <h2>{person.name}</h2>

      {/* diplay the marks */}
      {
        marks.map((mark,index) => <h2 className="text-red-600 bg-green-300 rounded-2xl m-2" key={index}>{mark}</h2>)
      }

      <h2 className=""> No of Clicks: {cntVal}</h2>

      <button onClick={incrementCnt} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">Increase Count</button>

      <button onClick={test1} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">click</button>
      <button onClick={ () => test2(100)} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">click</button>
      <button onClick={resetCnt} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 ">Reset Count</button>
    </div>
  )
}

export default App;