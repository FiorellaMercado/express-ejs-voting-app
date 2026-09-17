const express=require('express');
const router=express.Router();
const controller= require('../controllers/temasController')

//rutas con las funciones de controller que utilizarà
//temas

router.get('/listarTemas', controller.listarTemas);

router.post('/crearTema', controller.crearNuevoTema);

router.post('/eliminarTema/:id',controller.eliminarTema)

router.get('/traerTema/:id', controller.traerTema)

router.post('/actualizarTema/:id', controller.actualizarTema)

//enlaces

router.post('/crearEnlace/:id', controller.crearEnlace)

router.post('/eliminarEnlace/tema/:idTema/enlace/:idEnlace', controller.eliminarEnlace)

router.get('/traerEnlace/tema/:idTema/enlace/:idEnlace', controller.traerEnlace)

router.post('/actualizarEnlace/tema/:idTema/enlace/:idEnlace', controller.actualizarEnlace)

router.post('/votarTema/:idTema', controller.votarTema)

router.post('/votarEnlace/tema/:idTema/enlace/:idEnlace', controller.votarEnlace)



module.exports=router