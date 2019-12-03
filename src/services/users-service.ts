import { Document } from "mongoose";
import { DB } from "../controllers/db-controller";

export class UsersService {
    findByUsername(username: string) {

    }
    public async findUserByUsername(username: string): Promise<Document | null> {
        return await DB.Models.User.findOne({ username });
    }
    getAllEmails() {

    }
}
