const express=require('express');
const router=express.Router();
const model= require('../controllers/temasController')

router.get('/listarTemas', model.listarTemas);

router.post('/crearTema', model.crearNuevoTema);

module.exports=router