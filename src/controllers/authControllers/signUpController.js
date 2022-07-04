import mongoDB from "../../database/mongoDB.js";
import { encryptedPassword } from "../../bcrypt/encryptPassword.js";
const signUpController = async (req, res) => {
   const { name, email, password } = req.body;

   try {
      await mongoDB.collection('users')
         .insertOne(
            {
               name,
               email,
               password: encryptedPassword(password),
               //Balance: 0
            }
         );
      res.status(201).send("Usuário criado com sucesso!")
   } catch (err) {
      res.sendStatus(500)
      console.log(err);

   }
}

export default signUpController;