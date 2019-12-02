import { NextFunction, Request, Response } from 'express';

export const apiRoutesInit = (app: any, data: any): void => {
    app.get('/', (request: Request, response: Response, next: NextFunction) => {
        response.send('Hello world!');
      });
};
