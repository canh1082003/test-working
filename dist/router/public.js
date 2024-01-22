"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = void 0;
const express_1 = require("express");
const publiccontroller_1 = __importDefault(require("../modules/public/publiccontroller"));
exports.Public = (0, express_1.Router)();
exports.Public.get("/allStudent", publiccontroller_1.default.getAllStudent);
exports.Public.get("/student/:id", publiccontroller_1.default.getStudentById);
//# sourceMappingURL=public.js.map