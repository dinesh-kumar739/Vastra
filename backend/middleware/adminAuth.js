import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
    try {
        let {token}=req.cookies
        
        if(!token){
            return res.status(400).json({message:"Not Authorised Login Again"})
        }
        let verifyToken = jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(400).json({message:"Not Authorised Login Again, Invalid Token"})
        }
        req.adminEmail = process.env.ADMIN_EMAIL
        next()
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: `isAuth error ${error.message}` })
    }
}

export default adminAuth