const temas = [
  { id: 1, nombre: "ciencias", votos: 0, enlaces: [] },
  { id: 2, nombre: "literatura", votos: 0, enlaces: [] }
];


const getTemas = () => {
    return temas
}

const getTemaId=(id)=> {
    const tema_encontrado=temas.find(tema => tema.id === id )
    return tema_encontrado
}

const crearTema=(tema)=> {
    temas.push(tema)
}

module.exports={getTemas,getTemaId,crearTema}