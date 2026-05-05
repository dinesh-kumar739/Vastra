import express from "express"
import { adminLogin, googleLogin, login,logout,registration } from "../controller/authController.js"

const authRoutes = express.Router()

authRoutes.post("/registration",registration)
authRoutes.post("/login",login)
authRoutes.post("/logout",logout)
authRoutes.post("/googleLogin",googleLogin)
authRoutes.post("/adminLogin",adminLogin)

export default authRoutes