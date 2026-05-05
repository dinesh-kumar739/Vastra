import Jwt from 'jsonwebtoken'
const isAuth=async (req,res,next) => {
    try {
        let {token} = req.cookies
        if(!token){
            return res.status(400).json({messege:"user does not have token"})
        }
        let verifyToken = Jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(400).json({messege:"user does not have valid token"})
        }
        req.userId=verifyToken.userId
        next()
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: `isAuth error ${error.message}` })
    }
}

export default isAuth