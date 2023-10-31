import express from 'express'
import { formLogin, formPasswordRecovery, formRegister, insertUser ,confirmAccount, updatePassword, emailChangePassword, formPasswordUpdate} from "../controllers/userController.js";



const router = express.Router();

router.get("/", formLogin)
router.get("/register", formRegister)
router.get("/password-recovery", formPasswordRecovery);
router.post("/password-recovery", emailChangePassword); //**/
router.get("/update-password/:token", formPasswordUpdate);
router.post("/update-password/", updatePassword);
router.post("/register",insertUser);
router.get("/confirm/:token", confirmAccount);


export default router;