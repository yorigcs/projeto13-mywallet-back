import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET_KEY;

const validadeJwToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    const { user } = req.params;
 
    try {
        const decodedToken = jwt.verify(token, SECRET)
        if (user !== decodedToken.email) {
            return res.status(400).send("Não autorizado!")
        }
        next();
    } catch (err) {
        return res.status(400).send("Token inválido!")
    }    
}
export default validadeJwToken;