import bcrypt from "bcrypt";
import mongoDB from "../../database/mongoDB.js";
import { schemaSingIn } from "../../schema/schema.js";


const validateSignInData = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body)
    if (schemaSingIn.validate({ email, password }).error) {
        //console.log(schemaSingIn.validate({ email, password }).error)
        return res.status(422).send("Dados inválidos!")
    }
    try {
        const isRegistered = await mongoDB
            .collection('users')
            .findOne({ email });

        if (!isRegistered || !bcrypt.compareSync(password, isRegistered?.password)) {
            return res.status(400).send("Usuário não cadastrado ou senha inválida!")
        }

        res.locals.userData = { name: isRegistered.name, email };
        next();
    } catch (err) {
        console.log(err);
    }
}

export default validateSignInData;