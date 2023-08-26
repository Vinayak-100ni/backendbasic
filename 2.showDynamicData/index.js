import express from "express";
import path from "path";
const app = express();

//path.resolve() current path directory 
//path.join use for joining the path

//"use" is used bcz this api is a middleware btn 2 files

//set our static folder
app.use(express.static(path.join(path.resolve(),"public")));

//with the help of this we can serves our file everywhere with there filename instead of full path.
//also access in browser with their file name (http://localhost:5000/style.css)..


app.get("/",(req,res)=>{
    res.sendFile("index");
});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});