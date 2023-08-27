import mongoose from "mongoose";

export const connectDb =()=>{
    mongoose.connect(process.env.MONGO_URL,{
    dbName:"backendapi",
})
.then(()=>console.log("connected"))
.catch((e)=>console.log(e));
}
