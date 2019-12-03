import { IUser } from '../interfaces/user-interface';
import { UsersService } from '../services/users-service';

export class UserController {
    public usersService: UsersService;

    constructor() {
        this.usersService = new UsersService();
    }
    public async createUser(user: IUser): Promise<any> {
       const newUser = this.usersService.createUser(user);
    }

    public async validateUsername(usernameToValidate: string): Promise<void> {
        const user = await this.usersService.findUserByUsername(usernameToValidate);
    }
}