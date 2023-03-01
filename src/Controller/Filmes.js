import { openDb } from '../configDB.js';

export async function selectFilmes(req, res) {
  openDb().then((db) => {
    db.all('SELECT * From Filmes').then((filmes) => res.json(filmes));
  });
}

export async function insertFilme(req, res) {
  let filme = req.body;
  openDb().then((db) => {
    db.run('INSERT INTO Filmes (titulo, duracao, genero) VALUES (?, ?, ?)', [
      filme.titulo,
      filme.duracao,
      filme.genero,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateFilme(req, res) {
  let filme = req.body;
  openDb().then((db) => {
    db.run('UPDATE Filmes SET titulo=?, duracao=?, genero=? WHERE id=?', [
      filme.titulo,
      filme.duracao,
      filme.genero,
      filme.id,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteFilme(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get('DELETE FROM Filmes WHERE id=?', [id]).then((res) => res);
  });
  res.json({
    statusCode: 200,
  });
}
