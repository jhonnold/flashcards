import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'flashcards',
  port: 5432,
});

export default (callback) => {
  callback(pool);
};
