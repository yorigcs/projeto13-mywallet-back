import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const SECRET = process.env.SECRET_KEY;

const createJwToken = (req, res, next) => {

    const userData = res.locals.userData;
    const token = jwt.sign(userData, SECRET);
    res.locals.data = { data: userData, token };
    next();
}
export default createJwToken;