"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const typeorm_1 = require("typeorm");
let Student = class Student extends typeorm_1.BaseEntity {
};
exports.Student = Student;
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 20 })
], Student.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "age", nullable: true })
], Student.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "className", nullable: true, length: 10 })
], Student.prototype, "className", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "school", nullable: true, length: 20 })
], Student.prototype, "school", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "DateOfBirth", nullable: true })
], Student.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "studentId" })
], Student.prototype, "studentId", void 0);
exports.Student = Student = __decorate([
    (0, typeorm_1.Entity)("student", { schema: "student" })
], Student);
//# sourceMappingURL=Student.js.map