import express from "express";
import { userController } from "../controllers/user.controllers.js";

//controller
const {signupUser, loginUser} = userController;

//router
const userRouter = express.Router();


//login route
userRouter.post('/login', loginUser);

export { userRouter };