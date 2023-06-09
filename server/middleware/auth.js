import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {User} from '../models/user.models.js'// user model
dotenv.config(); 

export const requireAuth = (req, res, next) => {
    
    //verify authentication 
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({error: 'Authorizaiton token required'});
    }

    const token = authorization.split(' ')[1];

    try {
        const userCollection = User; 
        const {_id} = jwt.verify(token, process.env.TOKEN);

        req.user = userCollection.findOne({_id}).select('_id');
        next(); 
    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Request is not authorized'});
    }
}