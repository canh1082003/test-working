
import { Student } from "../../databases/postgresql/entities/Student";
export interface BodyResponse<T> {
    
    data: T;
    
}
export interface StudentResponse{
    students: Student[];
}
class PublicService {
    async findAllStudent(){
         return await Student.find();
    }
    async findStudentById(studentId: number){
      return await Student.findOne({where: {studentId}})
    }
}
export default new PublicService()