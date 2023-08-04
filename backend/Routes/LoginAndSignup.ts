import express from "express";
import { LoginController, SignupController } from "../Controller/LoginSignup";

const router = express.Router()


router.post("/login",LoginController)
router.post("/signup",SignupController)


export default router

