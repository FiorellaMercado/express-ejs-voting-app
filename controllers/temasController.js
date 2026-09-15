const {getTemas} = require('../models/tema')


const listarTemas = (req, res)=> {
    const temas= getTemas()
    res.render('temas',{temas})
}

module.exports = listarTemas