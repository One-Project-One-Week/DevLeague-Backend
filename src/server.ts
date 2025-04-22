import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
