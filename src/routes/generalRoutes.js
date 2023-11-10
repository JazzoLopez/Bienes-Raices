import express  from "express";
import{findAll, insertOne, findOneById, findOneByUserId, updateOne, deleteOne} from "../controllers/retoController.js";
const router = express.Router();

router.get('/', (request, response) => response.render("layout/index.pug", {page: "Home"}));
router.get('/insertOne', insertOne)
router.get('/findOneById', findOneById)
router.get('/findOneByUserId', findOneByUserId)
router.get('/updateOne', updateOne)
router.get('/deleteOne', deleteOne)
router.get('/findAll',findAll)
export default router;
