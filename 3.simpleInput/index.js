import express from "express";
import path from "path";
import mongoose from "mongoose";


const app = express();

mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
}).then(() => console.log("connected"))
    .catch((e) => console.log(e));

const messageSchema = new mongoose.Schema({                // create a schema (structure).
name: String,
email: String
});

const Messge = mongoose.model("Message",messageSchema);  //model (schema collection)

//Middlewares....................
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));


app.get("/contact", (req, res) => {
    res.render("index.ejs");
});
app.get("/success", (req, res) => {
    res.render("success.ejs");
});

app.post("/contact", async (req, res) => {
    await Messge.create({name:req.body.name,email:req.body.email}); //data will be saved on backend.
    res.redirect("/success");  
})
app.listen(5000, () => {
    console.log("server is running ");
});
