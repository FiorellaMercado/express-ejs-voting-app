const model = require('../models/tema')


const listarTemas = (req, res)=> {
    const temas= model.getTemas()
    temas.sort((a, b) => b.votos - a.votos)
    temas.forEach(tema => {
        tema.enlaces.sort((a, b) => b.votos - a.votos)
    })
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

const traerEnlace = (req,res) => {
    const idEnlace=req.params.idEnlace
    const idTema=req.params.idTema
    const enlace= model.getEnlaceId(idTema,idEnlace)
    res.render('editarEnlace', {idTema: parseInt(idTema), enlace: enlace} )
}

const actualizarEnlace = (req,res) => {
    const idEnlace= req.params.idEnlace
    const idTema=req.params.idTema
    const enlace= req.body['enlace']
    model.updateEnlace(idTema, idEnlace, enlace)
    res.redirect('/temas/listarTemas')

}

const votarTema =(req,res)=>{
    const idTema= req.params.idTema
    model.votarTema(idTema)
    //res.redirect('/temas/listarTemas')
    const tema = model.getTemaId(idTema)
    res.json({ votos: tema.votos })
}

const votarEnlace = (req,res)=>{
    const idTema=req.params.idTema
    const idEnlace=req.params.idEnlace
    model.votarEnlace(idTema,idEnlace)
    res.redirect('/temas/listarTemas')
}
module.exports = { listarTemas, crearNuevoTema, eliminarTema, traerTema, actualizarTema,
    crearEnlace, eliminarEnlace, traerEnlace, actualizarEnlace,
    votarTema, votarEnlace
}