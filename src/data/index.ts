import { IDataInterface } from '../interfaces/data-interface';
import { UsersData } from './users-data';

export const data: IDataInterface = {
    users: new UsersData(),
}
