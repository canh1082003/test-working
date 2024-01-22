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
const publicservice_1 = __importDefault(require("./publicservice"));
class PublicController {
    getAllStudent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const {name,age,class,school,dateOfBirth,studentId} = req.body as Student
                const Students = yield publicservice_1.default.findAllStudent();
                return res
                    .status(200)
                    .json({ data: Students });
            }
            catch (error) {
                console.error(error);
                next(error);
            }
        });
    }
    getStudentById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const studentId = req.params.id;
                const Student = yield publicservice_1.default.findStudentById(Number(studentId));
                const response = {
                    data: Student,
                };
                return res
                    .json(response);
            }
            catch (error) {
                console.error(error);
                next(error);
            }
        });
    }
}
exports.default = new PublicController();
//# sourceMappingURL=publiccontroller.js.map