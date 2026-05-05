import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
    try {
        let {token}=req.cookies;
        
        if(!token){
            return res.status(401).json({message:"Not Authorised Login Again"})
        }
        let verifyToken = jwt.verify(token,process.env.JWT_SECRET);
        if(verifyToken.email !== process.env.ADMIN_EMAIL){
            return res.status(403).json({message:"Not Authorised Login - Not Admin"})
        }
        req.admin = verifyToken;
        next()
    } catch (error) {
        console.log(error.message)
        return res.status(401).json({ message: `isAuth error ${error.message}` })
    }
}

export default adminAuth