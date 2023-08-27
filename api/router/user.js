import express from "express";
import { allUsers, dynamicUser, newUser } from "../controller/user.js";

const router = express.Router();


router.get("/all",allUsers);

router.post("/new",newUser);



 //.........................................................dynamic routing......................................
//______________________________________________dynamic route should be placed in last..
router.get("/userid/:id", dynamicUser);

export default router;