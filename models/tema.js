const temas = [{id:1, nombre:'Ciencias', votos:0, enlaces:['ahddfdsk','akwer']}]

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

module.exports={getTemas,getTemaId,crearTema, deleteTemaId, updateTema,
    getEnlaces
}