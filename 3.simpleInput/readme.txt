................input form with backend..........
create a public folder >styles.css
create a views folder >html.ejs

>html.ejs 
<form method="post"> 

...............index.js.......

create a Middleware for accessing the data.

app.use(express.urlencoded({extended:true });


........then api...

app.post("/",(req,res)=>{
***************
res.redirect("/success");
})
  

app.get("/success",(req,res)=>{
 res.render("success.ejs")}); 

............//api which contains input details.........

app.get("/user",(req,res)=>{
res.json({
user,})})

http://localhost:5000/data (you will get the user details.)


.............MONGODB............

npm i mongoose

import mongoose

mongoose.connect("mongodb://127.0.0.1:27017",{
dbName:" databasse_name ",})
.then(()=>console.log("connected"))
.catch((e)=> console.log(e));

.................create...schema..........

const messageSchema = new mongoose.Schema({                // create a schema (structure).
name: String,
email: String
});

.................create a model 
const Messge = mongoose.model("Message",messageSchema);  //model (schema collection)
 
 then create a post router which pass the data to backend


 app.post("/contact", async (req, res) => {
    await Messge.create({name:req.body.name,email:req.body.email}); //data will be saved on backend.
    res.redirect("/success");  
})