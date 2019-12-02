import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
});

export const UserModel = mongoose.model('Users', userSchema);
