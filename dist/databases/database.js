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
const typeorm_1 = require("typeorm");
const Student_1 = require("./postgresql/entities/Student");
const config_1 = __importDefault(require("../utils/config"));
class MysqlDatabase {
    constructor() {
        this.dataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, config_1.default.mysqlConfig), { entities: [Student_1.Student] }));
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connection = yield this.dataSource.initialize();
                console.log('Connected to the database!');
                return this.connection;
            }
            catch (error) {
                console.error('Error connecting to the database:', error.message);
                throw error;
            }
        });
    }
    ;
}
const mysqlDatabase = new MysqlDatabase();
exports.default = mysqlDatabase;
//# sourceMappingURL=database.js.map