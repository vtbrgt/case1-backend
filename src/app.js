import express from 'express';
import https from 'https';
import fs from 'fs';
import cors from 'cors';
import router from './routes.js';
import { createTableFilmes } from './Models/Filmes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

createTableFilmes();

app.listen(3000, () => console.log('API Rodando'));

https
  .createServer(
    {
      cert: fs.readFileSync('src/SSL/code.crt'),
      key: fs.readFileSync('src/SSL/code.key'),
    },
    app
  )
  .listen(3001, () => console.log('Rodando em https'));
