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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminservice_1 = __importDefault(require("./adminservice"));
class AdminController {
    createStudent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield adminservice_1.default.createStudentId(req);
                return res.status(201).json({
                    httpStatusCode: 201,
                    message: "Create Success",
                    data: student
                });
            }
            catch (error) {
                console.error(error);
                next(error);
            }
        });
    }
    updateStudent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { studentId } = req.params;
                const updatedData = req.body;
                const updateStudents = yield adminservice_1.default.updateStudentId(Number(studentId), updatedData);
                return res.status(200).json({
                    httpStatusCode: 200,
                    data: updateStudents,
                    message: "Update Success",
                });
            }
            catch (error) {
                console.error(error);
                next(error);
            }
        });
    }
    deleteStudent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { studentId } = req.params;
                const deleteStudent = yield adminservice_1.default.deleteStudentId(Number(studentId));
                return res.status(200).json({
                    httpStatusCode: 200,
                    message: "Delete Success bíu ti phun day"
                });
            }
            catch (error) {
                console.error(error);
                next(error);
            }
        });
    }
}
exports.default = new AdminController();
//# sourceMappingURL=admincontroller.js.map