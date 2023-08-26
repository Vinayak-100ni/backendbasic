.......PASSING DYNAMIC DATA TO WEBSITE......
ejs embedded javascript templates

  .....npm i ejs.

create views folder 

past html file in it then rename that html file with .ejs extension. 

//setting up view engine

app.set("view engine","ejs");

app.get("/",(req,res)=>{
res.render("index");
});
..........or..........
provide extension name in render function

app.get("/",(req,res)=>{
   res.render("index.ejs");
 });
