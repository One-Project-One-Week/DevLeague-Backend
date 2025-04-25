import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./router";
import "custom.d.ts";
const port = process.env.PORT || 3000;
const host = "0.0.0.0";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.use("/api/v1", router);

app.listen({ port, host }, () => {
  console.log(`Server is running on port ${port}`);
});
