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

const listarEnlaces = (req,res) => {
    const idTema=req.params.id
    const enlaces=model.getEnlaces(idTema)
    res.render('temas',{enlaces})
}


module.exports = { listarTemas, crearNuevoTema, eliminarTema, traerTema, actualizarTema,
    listarEnlaces
}