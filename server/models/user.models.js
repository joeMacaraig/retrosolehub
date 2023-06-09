import mongoose from 'mongoose'; 
import bcrypt from 'bcrypt';
import validator from 'validator';
const { Schema } = mongoose; 

const UserSchema = new Schema({
    first_name: {
        type: String, 
        required: true
    },
    last_name: {
        type: String, 
        required: true
    },
    username: {
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }
});

UserSchema.statics.login = async function (username, password) {
    
    if (!username || !password) {
        throw Error ('All fields must be filled!');
    }

    const user = await this.findOne({username});

    if (!user) {
        throw Error('Incorrect Username!');
    }

    const foundMatch = await bcrypt.compare(password, user.password);

    if (!foundMatch){
        throw Error ('Incorrect Password!');
    }

    return user;
}

export const User = mongoose.model('Users', UserSchema);