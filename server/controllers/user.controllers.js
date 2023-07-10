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
        const {username, password} = req.body;

        try {
            //using the login method in user model
            const user = await userCollection.login(username,password)

            //creating a token
            const token = createToken(userCollection._id);
            
            res.status(200).json({username, token});
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    }, 
}
