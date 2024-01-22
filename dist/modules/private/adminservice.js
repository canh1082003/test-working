"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("../../databases/postgresql/entities/Student");
class adminService {
    createStudentId(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, age, school, dateOfBirth, className } = req.body;
            const newStudent = yield Student_1.Student.create({
                name, age, school, dateOfBirth, className
            });
            yield newStudent.save();
            return newStudent;
        });
    }
    updateStudentId(studentId, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentIdUpdate = yield Student_1.Student.findOne({ where: { studentId } });
            Object.assign(studentIdUpdate, updatedData);
            yield studentIdUpdate.save();
            return studentIdUpdate;
        });
    }
    deleteStudentId(studentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentDelete = yield Student_1.Student.findOne({ where: { studentId } });
            if (!studentDelete) {
                throw new Error('Student not found');
            }
            yield studentDelete.remove();
            return studentDelete;
        });
    }
}
exports.default = new adminService();
//# sourceMappingURL=adminservice.js.map