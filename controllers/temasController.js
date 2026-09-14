const {getTemas} = require('../models/tema')


const listarTemas = (res, req)=> {
    const temas= getTemas()
    res.render('index',{temas})
}

module.exports = {listarTemas}