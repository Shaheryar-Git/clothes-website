import  express from "express";
import formController from "../Controllers/formController.js";
const Routers = express.Router()


Routers.post("/signIn",formController)


export default Routers