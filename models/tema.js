const db = require('../database');

//read
const getTemas = () => {
    const temas = db.prepare('SELECT * FROM temas ORDER BY votos DESC').all();
    //para ordenar tambien los enlaces de cada tema
    temas.forEach(tema => {
        tema.enlaces = db.prepare('SELECT * FROM enlaces WHERE tema_id = ? ORDER BY votos DESC').all(tema.id);
    });

    return temas;
};

const getTemaId = (id) => {
    const tema = db.prepare('SELECT * FROM temas WHERE id = ?').get(id);
    return tema;
};

//create
const crearTema = (nombre) => {
    const query = db.prepare('INSERT INTO temas (nombre) VALUES (?)');
    query.run(nombre);
};

//delete
const deleteTemaId = (id) => {
    // primero los enlaces del tema , efecto cascada
    const borrarEnlaces = db.prepare('DELETE FROM enlaces WHERE tema_id = ?');
    borrarEnlaces.run(id);

    const borrarTema = db.prepare('DELETE FROM temas WHERE id = ?');
    borrarTema.run(id);
};

//update
const updateTema = (nombre, id) => {
    const query = db.prepare('UPDATE temas SET nombre = ? WHERE id = ?');
    query.run(nombre, id);
};

// CRUD enlaces

//read
const getEnlaces = (idTema) => {
    const enlaces = db.prepare('SELECT * FROM enlaces WHERE tema_id = ? ORDER BY votos DESC').all(idTema);
    return enlaces;
};

const getEnlaceId = (idTema, idEnlace) => {
    const enlace = db.prepare('SELECT * FROM enlaces WHERE id = ? AND tema_id = ?').get(idEnlace, idTema);
    return enlace;
};

//create
const createEnlace = (idTema, nuevo_enlace) => {
    const query = db.prepare('INSERT INTO enlaces (tema_id, enlace) VALUES (?, ?)');
    query.run(idTema, nuevo_enlace);
};

const deleteEnlace = (idTema, idEnlace) => {
    const query = db.prepare('DELETE FROM enlaces WHERE id = ? AND tema_id = ?');
    query.run(idEnlace, idTema);
};

// enlace aquí es un string que viene del input
const updateEnlace = (idTema, idEnlace, str_enlace) => {
    const query = db.prepare('UPDATE enlaces SET enlace = ? WHERE id = ? AND tema_id = ?');
    query.run(str_enlace, idEnlace, idTema);
};

// votos

const votarTema = (idTema) => {
    const query = db.prepare('UPDATE temas SET votos = votos + 1 WHERE id = ?');
    query.run(idTema);
};

const votarEnlace = (idTema, idEnlace) => {
    const query = db.prepare('UPDATE enlaces SET votos = votos + 1 WHERE id = ? AND tema_id = ?');
    query.run(idEnlace, idTema);
};

// exportar lo que voy a usar en controller
module.exports = {
    getTemas, getTemaId, crearTema, deleteTemaId, updateTema,
    getEnlaces, getEnlaceId, createEnlace, deleteEnlace, updateEnlace,
    votarTema, votarEnlace
};