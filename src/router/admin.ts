import { Router } from "express";
import AdminController from "../modules/private/admincontroller";

export const Admin = Router();

Admin.post('/create',AdminController.createStudent)
Admin.put('/update/:studentId',AdminController.updateStudent)
Admin.delete('/delete/:studentId',AdminController.deleteStudent)