import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const authMiddleware = (req, res, next) => {
   const token = req.headers.authorization;
   
   if(!token) {
    res.status(401).json({ message: 'Invilid token', status: 'error'})
   } else {
         const dataFromToken = jwt.verify(token, process.env.JWT_SECRET);
         req.decoded = dataFromToken
         next()
   }

}


