import { IUser } from '../interfaces/user-interface';
import { UsersService } from '../services/users-service';
import { DB } from "./db-controller";

export class UserController {
    public usersService: UsersService;

    constructor() {
        this.usersService = new UsersService();
    }
    public async createUser(user: IUser): Promise<any> {
        let newUser = new DB.Models.User(user)
        newUser.save((err) => {
            if(err) {
                throw new Error(err);
            }
        })
    }

    public async validateUsername(usernameToValidate: string): Promise<void> {
        const user = await this.usersService.findUserByUsername(usernameToValidate);
        // console.log(user.username);
        // const isNameTaken = 
        // console.log(username);
        // return 
    }
}