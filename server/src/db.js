import { Pool } from 'pg';
import colors from 'colors/safe';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'flashcards',
  port: 5432,
});

if (process.env.NODE_ENV === 'development') {
  const { query } = pool;
  pool.query = (...args) => {
    console.log(colors.red('QUERY:'), colors.cyan(args));
    return query.apply(pool, args);
  };
}

export default (callback) => {
  callback(pool);
};
