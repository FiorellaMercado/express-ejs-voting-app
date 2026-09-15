const temas = []


const getTemas = () => {
    return temas
}

const getTemaId=(id)=> {
    const tema_encontrado=temas.find(tema => tema.id === id )
    return tema_encontrado
}

const crearTema=(nombre)=> {
    //id pseudo incremental
    const pseudo_id=temas.length+1;
    const tema={id:pseudo_id, nombre: nombre, votos:0, enlaces:[]}
    temas.push(tema)
}

const deleteTemaId = (id)=> {
    const indice=temas.findIndex(tema => tema.id === id)
    temas.splice(indice, 1)
}

module.exports={getTemas,getTemaId,crearTema, deleteTemaId}