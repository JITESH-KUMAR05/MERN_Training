import {useState} from 'react'
import {UserContext} from "./UserContext.js"

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState({
        name:"ravi",
        age:20,
        email:"ravi@gmail.com"
    })

    const changeUser = () =>{
        let obj = {...user};
        obj.name = "ravi kumar"
        obj.age = obj.age+2;
        setUser(obj);
    }
  return (
    <UserContext.Provider value={{user,changeUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
