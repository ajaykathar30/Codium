import jwt from 'jsonwebtoken'

const isAuth=async(req ,res,next)=>{
     try{
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({message:"user not authenticated ",success:false})
        }
        const decode=jwt.verify(token,process.env.SECRET_KEY)
        if(!decode){
            return res.status(400).json({message:"invalid token ",success:false})
        }
        req.id=decode.userID
        next()
     }catch(error){
        console.error(error)
    return res.status(500).json({ message: "Internal server error", success: false })
 
     }
}
export default isAuth