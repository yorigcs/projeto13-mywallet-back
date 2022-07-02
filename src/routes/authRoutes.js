import signUpController from '../controllers/authControllers/signUpController.js';
import signInController from '../controllers/authControllers/signInController.js';

//middlewares
import validateJwToken from '../middlewares/validateJwToken.js';
import validateSignUpData from '../middlewares/validateSignUpdata.js'

import { Router } from 'express';

const router = Router();

router.post('/signUp',validateSignUpData, signUpController);

export default router;
