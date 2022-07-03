import signUpController from '../controllers/authControllers/signUpController.js';
import signInController from '../controllers/authControllers/signInController.js';

//middlewares
import validateSignUpData from '../middlewares/validateSignUpdata.js'
import validateSignInData from '../middlewares/validateSignInData.js';
import createJwToken from '../middlewares/createJwToken.js';
import { Router } from 'express';


const router = Router();

router.post('/signUp',validateSignUpData, signUpController);
router.get('/signIn',validateSignInData,createJwToken,signInController);

export default router;
