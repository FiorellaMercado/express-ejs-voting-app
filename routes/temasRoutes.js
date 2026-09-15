const express=require('express');
const router=express.Router();
const listarTemas= require('../controllers/temasController')

router.get('/listarTemas', listarTemas);

module.exports=router