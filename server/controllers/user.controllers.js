import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { User } from '../models/user.models.js';
dotenv.config();

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWTKEY, {expiresIn:'3d'});
}


export const userController = {
    loginUser : async (req, res) => {
        const userCollection = User;
        const {email, password} = req.body;

        try {
            //using the login method in user model
            const user = await userCollection.login(email,password)

            //creating a token
            const token = createToken(userCollection._id);
            
            res.status(200).json({email, token});
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    }, 
    signupUser : async (req, res) => {
        const userCollection = User;
        const {email, password} = req.body; 

        try {
            const user = await userCollection.signup(email,password)
            const token = createToken(userCollection._id);
            res.status(200).json({email, token});
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    }
}
