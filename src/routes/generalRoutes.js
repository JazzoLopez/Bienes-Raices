import express from "express";
import { findAll, insertOne, findOneById, findOneByUserId, updateOne, deleteOne } from "../controllers/retoController.js";
const router = express.Router();

router.get('/', (request, response) => response.render("layout/index.pug", { page: "Home" }));
router.post('/insertOne', insertOne) //* Completado
router.get('/findOneById/:id', findOneById) //* Completado
router.get('/findOneByUserId/:userID', findOneByUserId) //* Completado
router.put('/updateOne/:id', updateOne)
router.delete('/deleteOne/:id', deleteOne)//*COMPLETADO
router.get('/findAll', findAll)//* Completado

export default router;
