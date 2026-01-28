// Create HTTP Server
// import express module
import express from 'express'
// create server
const app = express();
// assign the port number to the server
app.listen(3000,()=> console.log('HTTP server listening on the port 3000'));

//  create API --> handle the request so it will contain the req handlers
//  so we need to create routes

//  get request handing route (read users)
app.get('/users',(req,res)=>{
    // send response to client
    res.json({"message":"This is response from GET req handler"});
})
// post req handling route (post user)
app.post('/users',(req,res)=>{
    // send response
    res.json({"message":"This response from POST req handler"})
})
// put req handling route (update user)
app.put('/users/id',(req,res)=>{
    // send response
    res.json({"message":"This response from PUT req handler"})
})
// delete req handling route (delete user)
app.delete('/users/id',(req,res)=>{
    // send response
    res.json({"message":"This response from DELETE req handler"})
})