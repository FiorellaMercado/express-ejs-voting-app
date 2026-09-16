const express=require('express');
const router=express.Router();
const controller= require('../controllers/temasController')

router.get('/listarTemas', controller.listarTemas);

router.post('/crearTema', controller.crearNuevoTema);

router.post('/eliminarTema/:id',controller.eliminarTema)

router.get('/traerTema/:id', controller.traerTema)

router.post('/actualizarTema/:id', controller.actualizarTema)



module.exports=router