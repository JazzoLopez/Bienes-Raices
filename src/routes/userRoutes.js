import express from 'express'
import { formLogin, formPasswordRecovery, formRegister, insertUser ,confirmAccount, updatePassword, authenticateUser, emailChangePassword, formPasswordUpdate} from "../controllers/userController.js";



const router = express.Router();

router.get("/", formLogin) //Login
router.get("/register", formRegister) //Vista registro
router.post("/register",insertUser); //Registrar usuario
router.get("/confirm/:token", confirmAccount);//Confirmar correo
router.get("/password-recovery", formPasswordRecovery); //olvide mi contraseña
router.post("/password-recovery", emailChangePassword);
router.post("/", authenticateUser) //Login funcional
router.get("/update-password/:token", formPasswordUpdate); //Comprobar token
router.post("/update-password/:token", updatePassword); //Nuevo password




export default router;