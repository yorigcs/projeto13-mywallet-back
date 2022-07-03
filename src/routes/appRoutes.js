import { Router } from "express";
import balanceLogsController from "../controllers/appControllers/balanceLogsController.js";
import validadeJwToken from "../middlewares/appMiddlewares/validadeJwToken.js";

const router = Router();
router.get('/balanceLogs/:user', validadeJwToken, balanceLogsController)
router.post('/newRegister/:user')

export default router;