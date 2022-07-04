import signUpController from '../controllers/authControllers/signUpController.js';
import signInController from '../controllers/authControllers/signInController.js';

//middlewares
import validateSignUpData from '../middlewares/authMiddlewares/validateSignUpdata.js'
import validateSignInData from '../middlewares/authMiddlewares/validateSignInData.js';
import createJwToken from '../middlewares/authMiddlewares/createJwToken.js';
import { Router } from 'express';


const router = Router();

router.post('/signUp',validateSignUpData, signUpController);
router.post('/signIn',validateSignInData,createJwToken,signInController);

export default router;
