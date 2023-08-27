
import jwt from 'jsonwebtoken'

export const checkAuth = async (req, res, next) => {
   const authHeader = req.get('Authorization');

   if (authHeader) {
      // Get the token
      const token = authHeader.split(' ')[1];

      // Verify the JWR
      try {
         const user = jwt.verify(token, process.env.JWT_SECRET);
         req.user = user;
      } catch (error) {
         console.log('JWT no valido');
      }
   }

   return next();
}