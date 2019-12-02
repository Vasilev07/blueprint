import { NextFunction, Request, Response } from 'express';
import { UserController } from '../controllers/user-controller';

export const init = (app: any, data: any): void => {
    const userController = new UserController(data);

    app.post('/validate', async (request: Request, response: Response, next: NextFunction) => {
        const dataToSave = request.body;

        try {
            await userController.createUser(dataToSave);
        } catch (error) {
            console.error(error)
        }
    });
};
