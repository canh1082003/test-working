import express, { Router } from "express";
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { router } from "./router";
import mysqlDatabase from "./databases/database";

dotenv.config()
const app = express();

const port = process.env.PORT;
const host = process.env.HOST
app.use(express.json());
app.use('/',router)

app.listen(port,async() => {
   mysqlDatabase.connect();
   console.log(`server is listening on ${host}:${port}`);
}); 