const temas = [{id:1, nombre:'Ciencias', votos:0, enlaces:[
    {id:1, enlace: 'akldf', votos: 0}
]}]

//CRUD temas
const getTemas = () => {
    return temas
}

const getTemaId=(id)=> {
    const tema_encontrado=temas.find(tema => tema.id === parseInt(id) )
    return tema_encontrado
}

const crearTema=(nombre)=> {
    //id pseudo incremental
    const pseudo_id=temas.length+1;
    const tema={id:pseudo_id, nombre: nombre, votos:0, enlaces:[]}
    temas.push(tema)
}

const deleteTemaId = (id)=> {
    const indice=temas.findIndex(tema => tema.id === parseInt(id))
    temas.splice(indice, 1)
}

const updateTema=(nombre, id)=>{
    const indice= temas.findIndex(tema => tema.id === parseInt(id))
    temas[indice].nombre=nombre
}

// CRUD enlaces
const getEnlaces = (idTema) => {
    const tema_encontrado=temas.find(tema=>tema.id === parseInt(idTema))
    return tema_encontrado.enlaces
}

const createEnlace = (idTema,nuevo_enlace) => {
    const enlaces= getEnlaces(idTema)
    const pseudo_id= enlaces.length+1
    const enlace={id: pseudo_id, enlace: nuevo_enlace, votos: 0}
    return enlaces.push(enlace)
}
const deleteEnlace = (idTema, idEnlace)=>{
    const enlaces = getEnlaces(idTema)
    const indice = enlaces.findIndex(enlace=> enlace.id===parseInt(idEnlace))
    enlaces.splice(indice,1)
}



module.exports={getTemas,getTemaId,crearTema, deleteTemaId, updateTema,
    getEnlaces, createEnlace, deleteEnlace
}