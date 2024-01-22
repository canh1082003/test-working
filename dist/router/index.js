"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const public_1 = require("./public");
const admin_1 = require("./admin");
exports.router = (0, express_1.Router)();
exports.router.use("/public", public_1.Public);
exports.router.use("/admin", admin_1.Admin);
//# sourceMappingURL=index.js.map