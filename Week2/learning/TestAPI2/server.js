// we need to create server
import express from 'express'

const app = express();

// assigning a port number
app.listen(3000,() => console.log("App is running on port 3000"));

app.get('/',(req,res)=>{
    res.send("Application is running");
})

app.get('/users',(req,res)=>{
    res.json({"message":"This is response from get request"});
})

// POST
app.post("/users",(req,res) => {
    res.json({"message":"This is response from post request"});
})

// PUT
app.put("/users/id",(req,res)=>{
    res.json({"message":"This is response from put request"})
})

// DELETE

app.delete("/users/id",(req,res)=>{
    res.json({"message":"This is response from delete request"});
})