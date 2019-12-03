import { Document } from "mongoose";
import { DB } from "../controllers/db-controller";
import { IUser } from "../interfaces/user-interface";

export class UsersService {
    public async createUser(user: IUser): Promise<any> {
        const newUser = new DB.Models.User(user);

        newUser.save((err) => {
            if(err) {
                throw new Error(err);
            }
        })
    } 
    public async findUserByUsername(username: string): Promise<Document | null> {
        return await DB.Models.User.findOne({ username });
    }
}
