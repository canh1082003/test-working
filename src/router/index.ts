import { Router } from "express";
import { Public } from "./public";
import { Admin } from "./admin";

export const router = Router();

router.use("/public",Public)
router.use("/admin",Admin)
