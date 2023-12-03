import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { formProperty, saveNewProperty, addImage, loadImage } from "../controllers/propertyController.js";
import uploadImage from "../middlewares/uploadImage.js";
const router = express.Router();

 //*EL SEGUNDO PARAMETRO ES EL MIDDLEWARE DE SEGURIDAD
router.get('/create',protectRoute, formProperty)
router.post('/create',protectRoute, saveNewProperty)
 
router.get('/addImage/:idProperty', protectRoute,addImage);
router.post('/addImage/:idProperty', protectRoute, loadImage)

export default router