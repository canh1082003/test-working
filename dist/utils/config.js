"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Config {
    constructor() {
        this.PORT = "PORT";
        this.HOST = "HOST";
        this.DB_NAME = "DB_NAME";
        this.DB_PORT = "DB_PORT";
        this.DB_TYPE = "DB_TYPE";
        this.DB_USERNAME = "DB_USERNAME";
        this.DB_PASSWORD = "DB_PASSWORD";
        if (!process.env[this.PORT] ||
            !process.env[this.HOST] ||
            !process.env[this.DB_NAME] ||
            !process.env[this.DB_PORT] ||
            !process.env[this.DB_USERNAME] ||
            !process.env[this.DB_PASSWORD])
            throw new Error("Please make sure your environment variable is all set");
    }
    get isStudent() {
        return process.env.NODE_ENV === "student";
    }
    get isDevelopment() {
        return process.env.NODE_ENV === "development";
    }
    get portServer() {
        return Number(process.env.PORT);
    }
    get JWTSecretKey() {
        return process.env.JWT_SECRET_KEY;
    }
    get getHost() {
        return process.env.HOST;
    }
    get getDbName() {
        return process.env.DB_NAME;
    }
    get getDbPort() {
        return Number(process.env.DB_PORT);
    }
    get getDbType() {
        return 'mysql';
    }
    get getDbUserName() {
        return process.env.DB_USERNAME;
    }
    get getDbPassword() {
        return process.env.DB_PASSWORD;
    }
    get mysqlConfig() {
        return {
            host: this.getHost,
            port: this.getDbPort,
            username: this.getDbUserName,
            password: this.getDbPassword,
            database: this.getDbName,
            type: this.getDbType
        };
    }
}
exports.default = new Config();
//# sourceMappingURL=config.js.map