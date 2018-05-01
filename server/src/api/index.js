import { Router } from 'express';
import { version } from '../../package.json';
import sets from './sets';

export default ({ config, db }) => {
  const api = Router();

  api.use('/sets', sets({ config, db }));
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
};
