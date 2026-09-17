const Database = require('better-sqlite3');
const db = new Database('temas.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS temas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    votos INTEGER DEFAULT 0
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS enlaces (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tema_id INTEGER NOT NULL,
    enlace TEXT NOT NULL,
    votos INTEGER DEFAULT 0,
    FOREIGN KEY (tema_id) REFERENCES temas(id)
  )
`);

module.exports = db;