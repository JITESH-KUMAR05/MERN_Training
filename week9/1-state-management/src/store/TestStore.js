import {create} from "zustand"

// create store
export const useTest = create((set)=>({
    // state
    x:10,
    y:20,
    user: {
        name:"vikas",
        age: 19
    },
    // functions to modify the states
    incrementX: ()=>set(state => ({x:state.x+1})),
    decrementX: ()=>set(state => ({x:state.x-1})),
    incrementY: ()=>set(state => ({y:state.y+1})),
    changeName: (name)=> set(state => ({user:{...state.user,name:name}})),
    changeAge: (age)=> set(state => ({user:{...state.user, age:age}}))
}));