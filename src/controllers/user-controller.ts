import { IDataInterface } from "../interfaces/data-interface";
import { IUser } from "../interfaces/user-interface";

export class UserController {
    private data: IDataInterface;

    constructor(data: IDataInterface) {
        this.data = data;
    }

    public async createUser(user: IUser): Promise<any> {
        try {
            await this.data.users.create(user);
        } catch (error) {
            console.error(error);
        }
    }
}