import { Router } from 'express';
import {
  selectFilmes,
  insertFilme,
  updateFilme,
  deleteFilme,
} from './Controller/Filmes.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    statusCode: 200,
    msg: 'API Rodando',
  });
});

router.get('/filmes', selectFilmes);
router.post('/filme', insertFilme);
router.put('/filme', updateFilme);
router.delete('/filme', deleteFilme);

export default router;
