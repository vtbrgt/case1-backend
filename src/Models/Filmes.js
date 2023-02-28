import { openDb } from '../configDB.js';

export async function createTableFilmes() {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS Filmes ( id INTEGER PRIMARY KEY AUTOINCREMENT, titulo VARCHAR(100) NOT NULL, duracao INTEGER NOT NULL, genero VARCHAR(30) NOT NULL )'
    );
  });
}
