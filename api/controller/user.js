import { User } from "../module/user.js";

export const allUsers = async(req,res)=>{

    const users = await User.find({});
    res.json({
        success:true,
        users,
    });
};

export const newUser = async (req,res)=>{
    const {name , email ,password} =req.body;
    await User.create({
        name,email,password,
    });

    res.status(201).json({
        success:"true",
        message:"data send successfully"
    })
}

export const dynamicUser =  async (req,res)=>{  
    const {id} = req.params;                   //with the help of req.params we get the dynamic id .
   const user = await User.findById(id);      //EX.(userid/soni)=>{ id: 'soni' } 
    res.json({                               //EX.(userid/vinayak)=>{ id: 'vinayak' } 
        success:true,                     
        user,
    });
}
