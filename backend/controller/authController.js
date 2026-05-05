import User from "../model/userModel.js";
import validator from "validator"
import bcrypt from "bcryptjs"
import { genToken, genToken1 } from "../config/token.js"

export const registration = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exist" })
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Enter Valid Email" })
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Enter Strong Password" })
        }
        let hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashPassword })
        let token = genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        const { password: _, ...userWithoutPassword } = user.toObject()
        return res.status(201).json(userWithoutPassword)
    } catch (error) {
        console.log("registration Error", error)
        return res.status(500).json({ message: `registration error ${error}` })
    }
}

export const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User Not Found" })
        }
        let isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" })
        }
        let token = genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        const { password: _, ...userWithoutPassword } = user.toObject()
        return res.status(200).json(userWithoutPassword)
    } catch (error) {
        console.log("Login error", error)
        return res.status(500).json({ message: `Login error ${error}` })
    }
}



export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/"
        });

        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ message: `Logout error ${error}` });
    }
};

export const googleLogin=async (req,res)=>{
    try {
        let {name,email}=req.body;
        let user = await User.findOne({ email })
        if (!user) {
            user=await User.create({name,email})
        }
        let token = genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        const { password: _, ...userWithoutPassword } = user.toObject()
        return res.status(200).json(user)
    } catch (error) {
        console.log("googleLogin error", error)
        return res.status(500).json({ message: `googleLogin error ${error}` })
    }
}

export const adminLogin= async (req,res) => {
    try {
        let {email,password}=req.body
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASS){
            let token = await genToken1(email)
            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 1 * 24 * 60 * 60 * 1000
            })
            return res.status(200).json(token)
        }
        return res.status(400).json({message:"invalid credentials"})
    } catch (error) {
        console.log("admin login error")
        return res.status(500).json({ message: `admin login ${error}` })
    }
}