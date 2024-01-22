import { NextFunction, Request, Response } from "express";
import publicservice, { BodyResponse } from "./publicservice";
import { Student } from "../../databases/postgresql/entities/Student";
import { HttpStatusCode } from "../../utils/httpStatusCode";
class PublicController {
    async  getAllStudent(req: Request, res: Response, next: NextFunction){
        try {
            // const {name,age,class,school,dateOfBirth,studentId} = req.body as Student
            const Students = await publicservice.findAllStudent();
            
            return res
            .status(200)
            .json( {data:Students} );
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
    async getStudentById(req:Request,res:Response,next: NextFunction){
        try {
            const studentId = req.params.id; 
            const Student = await publicservice.findStudentById(Number(studentId));
            const response: BodyResponse<Student> ={
                data: Student,
            }
            return res
            .json( response );
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
    
}
export default new PublicController()