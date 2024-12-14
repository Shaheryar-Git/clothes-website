import express from "express";
const app = express();
import Color from "colors";
import cors from "cors";
import Dotenv from "dotenv";
Dotenv.config();
import DBConnection from "./config/DB.js";
DBConnection();
import Routers from "./Routers/differentRouters.js";
import morgan from "morgan";
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(Routers);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(
    `SERVER IS RUNNING IN ${PORT} PORT MODE ${process.env.MODE}`.bgBlue
  );
});
