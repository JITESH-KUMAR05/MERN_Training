// Create HTTP Server
// import express module
import express from 'express'
// create server
const app = express();
// assign the port number to the server
app.listen(3000,()=> console.log('HTTP server listening on the port 3000'));

// body parsing middleware
app.use(express.json());
//  create API --> handle the request so it will contain the req handlers
//  so we need to create routes

// test local in memory data
let users = [];

//  get request handing route (read users)
app.get('/users',(req,res)=>{
    // send users data in res
    res.status(200).json({message:"all users data",payload:users}) // message,payload
})
// post req handling route (post user)
app.post('/users',(req,res)=>{
    // create a new user
    let newUser = req.body;
    // console.log("new user",newUser);
    // insert new user to user array
    users.push(newUser);
    res.status(201).json({message:"User created successfully"})
    
})
// put req handling route (update user)
app.put('/users/id',(req,res)=>{
    // updating the user
    // get the modified user
    let modifiedUSer = req.body;
    // console.log(modifiedUSer);
    // find the user with id exists in array 
    // if user not found send res as user not found
    // if user found then modify the user
    // send res as "user modified"
    let checkIfExist = users.findIndex((user) => user.id === modifiedUSer.id);
    if(checkIfExist === -1){
        res.status(404).json({message:"User Not Found"})
    }
    else{
        let delUser = users.splice(checkIfExist,1,modifiedUSer);
        // console.log(delUser);
        res.status(200).json({message:"User updated successfully"})
    }
})
// delete req handling route (delete user)
app.delete('/users/id',(req,res)=>{
    // send response
    res.json({"message":"This response from DELETE req handler"})
})