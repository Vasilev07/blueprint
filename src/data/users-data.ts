import { UserModel } from "../schemas/user-schema";
import { Data } from "./data-generic";

export class UsersData extends Data {
    constructor() {
        console.log('usermodel', UserModel);
        super(UserModel);
    }

    findByUsername(username: string) {

    }
    getAllUsernames() {

    }
    getAllEmails() {

    }
}
