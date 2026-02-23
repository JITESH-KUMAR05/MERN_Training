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
        marks.map((mark,index) => <h2 className="text-red-600" key={index}>{mark}</h2>)
      }


      <button onClick={test1} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2">click</button>
      <button onClick={ () => test2(100)} className="bg-amber-500 text-shadow-indigo-100 px-5 py-2">click</button>
    </div>
  )
}

export default App;