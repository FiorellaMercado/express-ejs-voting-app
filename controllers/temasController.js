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

module.exports = { listarTemas, crearNuevoTema}