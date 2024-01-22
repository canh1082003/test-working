import { NextFunction, Request, Response, request } from "express";
import adminService from "./adminservice";
import { Student } from "../../databases/postgresql/entities/Student";

class AdminController{
    async createStudent(req: Request, res: Response, next: NextFunction) {
        try {
          const student = await adminService.createStudentId(req);
          return res.status(201).json({
            httpStatusCode: 201,
            message: "Create Success",
            data :student
          });
        } catch (error) {
          console.error(error);
          next(error);
        }
      }
    async updateStudent(req: Request,res: Response,next: NextFunction){
      try {
        const {studentId} = req.params;
        const updatedData = req.body;
        const updateStudents = await adminService.updateStudentId(Number(studentId),updatedData);
        return res.status(200).json({
          httpStatusCode: 200,
          data: updateStudents,
          message:"Update Success",
      });
      } catch (error) {
        console.error(error);
        next(error);
      }
    }
    async deleteStudent(req: Request,res: Response,next: NextFunction){
      try {
        const {studentId}= req.params;
        const deleteStudent = await adminService.deleteStudentId(Number(studentId));
        return res.status(200).json({
          httpStatusCode: 200,
          message:"Delete Success bíu ti phun day"
      });
      } catch (error) {
         console.error(error);
            next(error);
      }
    }
}
export default new AdminController()

