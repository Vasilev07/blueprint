import express, { Application } from 'express';
import mongoose from 'mongoose';
import { expressInit } from './confiigs/expressConfig';
import { port } from './confiigs/index';
import { apiRoutesInit } from './routes/api-routes';
const app: Application = express();
const data = {};
expressInit(app);
apiRoutesInit(app, data);

const uri: string = "mongodb://localhost:27017/blueprint";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected To Blueprint DB!");
  }
});

app.listen(port, () => console.log(`Listening on ${port}`));


