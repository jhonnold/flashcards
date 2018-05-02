import { Router } from 'express';
import { version } from '../../package.json';
import sets from './sets';
import flashcards from './flashcards';

export default ({ config, db }) => {
  const api = Router();

  api.use('/sets', sets({ config, db }));
  api.use('/flashcards', flashcards({ config, db }));
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
};
