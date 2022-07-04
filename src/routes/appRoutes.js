import { Router } from "express";
import balanceLogsController from "../controllers/appControllers/balanceLogsController.js";
import insertNewValue from "../controllers/appControllers/insertNewValue.js";
import validateJwToken from "../middlewares/appMiddlewares/validateJwToken.js";
import validateInsert from "../middlewares/appMiddlewares/validateInsert.js";

const router = Router();
router.get('/balanceLogs/:user', validateJwToken, balanceLogsController)
router.post('/newRegister/:user',validateJwToken, validateInsert, insertNewValue)

export default router;