"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const express_1 = require("express");
const admincontroller_1 = __importDefault(require("../modules/private/admincontroller"));
exports.Admin = (0, express_1.Router)();
exports.Admin.post('/create', admincontroller_1.default.createStudent);
exports.Admin.put('/update/:studentId', admincontroller_1.default.updateStudent);
exports.Admin.delete('/delete/:studentId', admincontroller_1.default.deleteStudent);
//# sourceMappingURL=admin.js.map