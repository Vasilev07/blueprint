import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose, {Schema} from 'mongoose';

const app: Application = express();
const port = 5000;

app.get('/', (request: Request, response: Response, next: NextFunction) => {
  response.send('Hello world!');
});


const mongoDb = "mongodb://127.0.0.1/test";

mongoose.connect(mongoDb, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection error"));


const Shark = new Schema ({
  name: { type: String, required: true },
  character: { type: String, required: true },
});
const model = mongoose.model('Shark', Shark);
const test = new model({
  name: 'TEST',
  character: 'IT IS WORKING'
}) as Partial<Document>

app.listen(port, () => console.log(`Listening on ${port}`));


