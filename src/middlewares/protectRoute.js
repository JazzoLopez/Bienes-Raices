import jsonWebToken from "jsonwebtoken";
import dotenv from 'dotenv';
import User from "../models/user.js";
dotenv.config({
    path: 'src/.env'
});
const protectRoute = async (req, res, next) => {
    const { _token } = req.cookies
    //VERIFICAR QUE EL TOKE EXISTE
    if (!_token) {
        return res.redirect('/login');
    }
    //VERIFICAR QUE EL TOKEN
    try {
        const decoded = jsonWebToken.verify(_token, process.env.JWT_SECRET_HASH_STRING)
        const loggedUser = await User.findByPk(decoded.userID)
        // console.log(loggedUser)
         //ALMACENAR EL USUARIO EN EL REQUEST
        if (loggedUser) {
            req.user = loggedUser;
        } else {
            return res.redirect('/login')
        }
    } catch (err) {
        console.log(err);
    }    
    next();
}

export { protectRoute }