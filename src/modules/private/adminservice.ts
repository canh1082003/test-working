
import { Student } from "../../databases/postgresql/entities/Student";
import { NextFunction, Request, Response, request } from "express";


class adminService{
    async createStudentId(req: Request) {
          const { name, age, school, dateOfBirth, className }= req.body 
          const newStudent = await Student.create({
            name, age, school, dateOfBirth, className
          });
          await newStudent.save();
          return newStudent;
      }
      async updateStudentId(studentId : number,updatedData: Partial<Student>){
        const studentIdUpdate = await Student.findOne({where:{studentId}});
        if(!studentIdUpdate){
            throw new Error('Student Id Not Found')
        }
        Object.assign(studentIdUpdate,updatedData)// Object.assign là sao chép các dữ liệu từ updatedData sang studentIdUpdate
        await studentIdUpdate.save();
        return studentIdUpdate;
      }
      async deleteStudentId(studentId : number){
        const studentDelete = await Student.findOne({where: {studentId}});
        if(!studentDelete){
          throw new Error('Student not found')
        }
        await studentDelete.remove();
        return studentDelete
      }
}
export default new adminService()