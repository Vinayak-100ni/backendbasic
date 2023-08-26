import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
}).then(() => console.log("connected"))
    .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model("User", userSchema);


const isAuthenticated = async (req, res, next) => {      //middleware handler created
    const { token } = req.cookies;

    if (token) {

        const decoded = jwt.verify(token, "jfkglsgfdgh");

        req.user = await User.findById(decoded._id);
        next();
    }
    else {
        res.render("login.ejs");
    }
}

app.get("/", isAuthenticated, (req, res) => {

    res.render("logout.ejs", { name: req.user.name });
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.post("/login", async (req, res) => {

    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) return res.redirect("/register");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.render("login.ejs", { email, message: "password is incorrect." });

    const token = jwt.sign({ _id: user._id }, "jfkglsgfdgh");

    res.cookie("token", token, {     //pass schema model data into cookie
        httpOnly: true,
    });
    res.redirect("/");
});

app.get("/logout", (req, res) => {
    res.cookie("token", null, {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.redirect("/");
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        return res.redirect("/login");
    }

    const hashedPass = await bcrypt.hash(password, 10); //hash the password for security.

    user = await User.create({
        name,
        email,
        password: hashedPass,
    });

    const token = jwt.sign({ _id: user._id }, "jfkglsgfdgh");

    res.cookie("token", token, {     //pass schema model data into cookie
        httpOnly: true,
    });
    res.redirect("/");
});

app.get("/logout", (req, res) => {
    res.cookie("token", null, {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.redirect("/");
});




app.listen(5000, () => {
    console.log("server is connected");
});