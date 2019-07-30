import express, { Application, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const app: Application = express();
const port = 5000;

app.get('/', (request: Request, response: Response, next: NextFunction) => {
  response.send('Hello world!');
});


const uri: string = "mongodb://localhost:27017/blueprint";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected To Blueprint DB!");
  }
});

app.listen(port, () => console.log(`Listening on ${port}`));


