import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./router";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
