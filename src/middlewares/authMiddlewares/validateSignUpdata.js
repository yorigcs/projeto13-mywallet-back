import mongoDB from "../../database/mongoDB.js";
import { schemaSingUp } from "../../schema/schema.js";
const validateSignUpData = async (req, res, next) => {
    const { name, email, password, confirmPw } = req.body;

    const schema = schemaSingUp.validate({ name, email, password, confirmPw });
    if (schema.error || password !== confirmPw) {
        return res.status(422).send('Dados inválidos!');
    }

    try {
        const isUserRegistered= await mongoDB.collection('users').findOne({ email });
        console.log(isUserRegistered)
        if(isUserRegistered) {
            return res.status(400).send('Este email já está cadastrado!');
        }
        next();
     } catch (err) {
         console.error(err);
     }
   
}

export default validateSignUpData