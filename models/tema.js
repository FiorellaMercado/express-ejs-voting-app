const temas = []

//CRUD temas

//read
const getTemas = () => {
    return temas
}

const getTemaId=(id)=> {
    const tema_encontrado=temas.find(tema => tema.id === parseInt(id) )
    return tema_encontrado
}

//create
const crearTema=(nombre)=> {
    //id incremental
    const pseudo_id=temas.length+1;
    const tema={id:pseudo_id, nombre: nombre, votos:0, enlaces:[]}
    temas.push(tema)
}

//delte
const deleteTemaId = (id)=> {
    const indice=temas.findIndex(tema => tema.id === parseInt(id))
    temas.splice(indice, 1)
}

//update
const updateTema=(nombre, id)=>{
    const indice= temas.findIndex(tema => tema.id === parseInt(id))
    temas[indice].nombre=nombre
}

// CRUD enlaces
const getEnlaces = (idTema) => {
    const tema_encontrado=temas.find(tema=>tema.id === parseInt(idTema))
    const enlaces= tema_encontrado.enlaces
    return enlaces
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

// enlace aqui es un string que viene del input
const updateEnlace = (idTema, idEnlace,str_enlace) => {
    const enlace=getEnlaceId(idTema,idEnlace)
    enlace.enlace=str_enlace
    
}

const getEnlaceId = (idTema, idEnlace) => {
    const enlaces=getEnlaces(idTema)
    const indice=enlaces.findIndex(enlace => enlace.id === parseInt(idEnlace))
    return enlaces[indice]

}

// votos

const votarTema = (idTema)=>{
    const tema= getTemaId(idTema)
    tema.votos= tema.votos+1
}
const votarEnlace=(idTema,idEnlace)=>{
    const enlace=getEnlaceId(idTema,idEnlace)
    enlace.votos=enlace.votos+1

}

// exportar lo que voy a usar en controller
module.exports={getTemas,getTemaId,crearTema, deleteTemaId, updateTema,
    getEnlaces, getEnlaceId, createEnlace, deleteEnlace, updateEnlace,
    votarTema, votarEnlace
}