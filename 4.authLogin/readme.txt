.....Accessing the cookies........

npm i cookie-parser..

app.use(cookieParser());

create a login router then create a logout Router.

...................................get the login details from login form into mongodb.

app.post("/login", async (req, res) => {
    const { name, email } = req.body;

   const user = await User.create({
        name, 
        email,
    });

    res.cookie("token", user._id, {
        httpOnly: true,
    });
    res.redirect("/");
});

 ........secure user_id in cookie.......

npm i jsonwebtoken.

 then create a token

const token = jwt.sign({_id:user._id},
"sfgsgdgjkl");

then pass this into cookie router.

    res.cookie("token", token, {     //pass schema model data into cookie
        httpOnly: true,
    });

.....for accessing the schema data decode the token.

const decodedData = jwt.verify(token."sfgsgdgjkl"); 

........check the user details with mongo data.

    req.user = await User.findById(decoded._id);

.......Secure the password...........

npm i bcrypt.

...........convert it into hash pas..
 const hashedPass = await bcrypt.hash(password, 10); 

...............AT login section compare.

 const isMatch = await bcrypt.compare(password, user.password);

  
