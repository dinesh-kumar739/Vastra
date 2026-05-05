import jwt from "jsonwebtoken"

export const genToken = (userId) => {
    try {
        let token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})
        return token
    } catch (error) {
        console.log("token error",error.messege)
    }
}

export const genToken1 =(email) => {
    try {
        let token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"7d"})
        return token
    } catch (error) {
        console.log("token error",error.message)
    }
}