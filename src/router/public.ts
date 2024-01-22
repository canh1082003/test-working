import { Router } from "express";
import PublicController from "../modules/public/publiccontroller";

export const Public = Router();

Public.get("/allStudent",PublicController.getAllStudent)
Public.get("/student/:id",PublicController.getStudentById)