import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './router';
import './../custom.d.ts';
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/', (res: Response, req: Request) => {
  res.sendStatus(200);
});
app.use(cors());

app.use('/api/v1', router);

app.listen({ port, host }, () => {
  console.log(`Server is running on port ${port}`);
});
