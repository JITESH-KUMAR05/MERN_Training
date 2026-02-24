import { useState } from "react";
import "./App.css";
import Test1 from "./components/Test1";
import FormDemo from "./components/FormDemo";
import TaskManager from "./components/TaskManager";

// update marks state by inserting elements at the beginning,ending and in between with index
// delete marks from the end of the array

function App() {
  let [cntVal, setCntVal] = useState(0);
  const [marks, setMarks] = useState([10, 20]);
  const [user, setuser] = useState({
    name:"jk",
    email:"jk@gmail.com"
  })
  const incrementCnt = () => {
    console.log(cntVal);
    setCntVal(cntVal + 1);
  };

  const decrement = () => {
    console.log(cntVal);
    setCntVal(cntVal - 1);
  };

  const resetCnt = () => {
    setCntVal(0);
  };

  const addMarksAtStart = (mark) => {
    setMarks([mark, ...marks]);
  };

  const addMarksAtEnd = (mark) => {
    setMarks([...marks, mark]);
  };

  
  const addMarkAtId = (mark, id) => {
    const newMarks = [...marks];
    newMarks.splice(id, 0, mark);
    setMarks(newMarks)
  };

  const deleteMarksAtEnd = ()=>{
    let newMarks = [...marks];
    newMarks.pop();
    setMarks(newMarks)
  }

  const deleteMarksAtStart = ()=>{
    const newMarks = [...marks];
    newMarks.shift();
    setMarks(newMarks)
  }

  const deleteMarksAtId = (id) => {
    const newMarks = [...marks];
    newMarks.splice(id,1);
    setMarks(newMarks)
  }

  const updateUser = () => {
    setuser({...user,city : "hyd"});
  }

  const deleteProp = () => {
    let {city, ...rest} = user;
    setuser(rest);
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl">Welcome to React</h1>
        <Test1 message="Good Morning" />
        <Test1 message="Good Afternoon" />
        <Test1 message="Good night" />
        <h1>{cntVal}</h1>
        <button
          onClick={incrementCnt}
          className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3"
        >
          Increase Count
        </button>

        <button
          onClick={decrement}
          className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3"
        >
          Decrement Count
        </button>

        <button
          onClick={resetCnt}
          className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 "
        >
          Reset Count
        </button>

        {marks.map((mark, index) => (
          <h2 key={index}>{mark}</h2>
        ))}
        <button onClick={() => addMarksAtStart(40)} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">Add mark at start</button>
        <button onClick={() => addMarksAtEnd(45)} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">Add mark at end</button>
        <button onClick={() => addMarkAtId(50,1)} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">Add mark in between</button>
        <button onClick={deleteMarksAtEnd} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">delete mark at end</button>
        <button onClick={deleteMarksAtStart} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">delete mark at start</button>
        <button onClick={() => deleteMarksAtId(1)} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">delete mark at Id</button>
        

        {
          Object.entries(user).map(([key,val],index) => {
            return (
              <h2 key={index}>{key} : {val} </h2>
            )
          })
        }

        <button onClick={updateUser} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">Update user</button>
        <button onClick={() => deleteProp()} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2 mr-3">Update user</button>

        <h2>Form Demo</h2>
        
        <FormDemo />

        <TaskManager />
      </div>
    </div>
  );
}

export default App;
