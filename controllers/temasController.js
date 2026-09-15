const {getTemas} = require('../models/tema')


const listarTemas = (req, res)=> {
    const temas= getTemas()
    res.render('index',{temas})
}

module.exports = listarTemas