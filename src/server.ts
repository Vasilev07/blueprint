import express, { Application, Request, Response, NextFunction } from 'express';
import { MongoClient } from 'mongodb';

const app: Application = express();
const port = 5000;
 
app.get('/', (request: Request, response: Response, next: NextFunction) => {
  response.send('Hello world!');
});
 
app.listen(port, () => console.log(`Listening on ${port}`));


(async () => {
    const connection = await MongoClient.connect('mongodb://localhost:27017/test');
    const db = connection.db('test');
})();