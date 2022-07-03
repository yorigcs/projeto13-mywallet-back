import { Router } from "express";
import balanceLogsController from "../controllers/appControllers/balanceLogsController.js";
import insertNewValue from "../controllers/appControllers/insertNewValue.js";
import validadeJwToken from "../middlewares/appMiddlewares/validadeJwToken.js";
import validateInsert from "../middlewares/appMiddlewares/validateInsert.js";

const router = Router();
router.get('/balanceLogs/:user', validadeJwToken, balanceLogsController)
router.post('/newRegister/:user',validadeJwToken, validateInsert, insertNewValue)

export default router;