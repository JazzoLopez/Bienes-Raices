import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { formProperty, saveNewProperty, addImage } from "../controllers/propertyController.js";
const router = express.Router();


router.get('/create',protectRoute, formProperty)
router.get('/addImage/:idProperty', protectRoute,addImage);
router.post('/create',protectRoute, saveNewProperty) //2 ES PARAMETRO DE SEGURIDAD  

export default router