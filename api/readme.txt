 npm i express mongoose dotenv cookie-parser


"main":"server.js", 
"type":"module"


postman for checking the api.....

for passing the json data use 

app.use(express.json());//middleware. 

this is used for testing the api in postman bcz output data present in json form.   

3:27

............dynamic Routing........


.......note............
dynamic route should be placed in last..
app.get("userid/:userID",async (req,res)=>{
...............  ....} 


//..............Route Spliting-MVC....

1. Create new (folder)->routes->(file)->user.js.

import express and module (mongo).....

const router =express.Router();

               ..
               ..
               ..
export default router;


2. ...........create a seprate file for database

(folder)models->file->user.js

import mongoose..

mogoo.connection...

const schema...

const user.....

3..........create a controllers->user.js.

3:47

 .....................env............

app.js->>
import {config} from "dotenv"

config({
path:"./data/config.env;
});

config.env........NAME="adfdfs"

process.env.NAME.


