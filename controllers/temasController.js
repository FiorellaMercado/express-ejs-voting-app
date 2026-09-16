const model = require('../models/tema')


const listarTemas = (req, res)=> {
    const temas= model.getTemas()
    res.render('temas',{temas})
}

const crearNuevoTema =(req, res)=> {
    const nombre = req.body['nombre']
    model.crearTema(nombre)
    res.redirect('/temas/listarTemas')
}

const eliminarTema = (req, res)=> {
    const id = req.params.id
    model.deleteTemaId(id)
    res.redirect('/temas/listarTemas')
}

const traerTema = (req, res )=>{
    const id=req.params.id
    const tema = model.getTemaId(id)
    const nombre = tema['nombre']
    res.render('editarTema', {nombre: nombre, id: id})
}

const actualizarTema =(req,res) => {
    const nombre = req.body['nombre']
    const id = req.params.id
    model.updateTema(nombre, id)
    res.redirect('/temas/listarTemas')
}

//Enlaces controladores

const crearEnlace = (req,res) => {
    const idTema = req.params.id
    const enlace = req.body['enlace']
    model.createEnlace(idTema, enlace)
    res.redirect('/temas/listarTemas')
}
const eliminarEnlace = (req, res) => {
    const idTema=req.params.idTema
    const idEnlace=req.params.idEnlace
    model.deleteEnlace(idTema, idEnlace)
    res.redirect('/temas/listarTemas')
}

const traerElnace = (req,res => {
    const idEnlace=req.params.idEnlace
    const idTema=req.params.idTema
    const enlace= model.getEnlaceId(idTema,idEnlace)
    res.render('editarEnlace', enlace )
})

module.exports = { listarTemas, crearNuevoTema, eliminarTema, traerTema, actualizarTema,
    crearEnlace, eliminarEnlace, traerElnace
}