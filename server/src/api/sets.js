import resource from 'resource-router-middleware';

export default ({ config, db }) =>
  resource({
    mergeParams: true,
    id: 'set',

    // Called before requests that take an :id
    load(req, id, callback) {
      db
        .query('select * from sets where id = $1', [id])
        .then(({ rows }) => {
          if (rows.length === 0) callback('Not Found');
          callback(null, rows[0]);
        })
        .catch(err => callback(err));
    },

    // GET `/api/sets`
    index({ params }, res) {
      db
        .query('select * from sets')
        .then(({ rows }) => res.json(rows))
        .catch(err => res.send(err));
    },

    // POST `/api/sets`
    create({ body }, res) {
      db
        .query('insert into sets (creator, name, description) values ($1, $2, $3) returning *', [
          body.creator,
          body.name,
          body.description,
        ])
        .then(({ rows }) => res.json(rows[0]))
        .catch(err => res.send(err));
    },

    // GET `/api/sets/:id`
    read({ set }, res) {
      res.json(set);
    },

    // PUT `/api/sets/:id`
    update({ set, body }, res) {
      const permitted = {};
      const whitelist = ['creator', 'name', 'description'];
      whitelist.forEach((w) => {
        if (body[w] !== undefined) permitted[w] = body[w];
      });

      const query = ['update sets'];
      query.push('set');

      query.push(Object.keys(permitted)
        .map((k, i) => `${k} = ($${i + 1})`)
        .join(', '));

      query.push(`where id = ${set.id} returning *`);

      db
        .query(query.join(' '), Object.values(permitted))
        .then(({ rows }) => res.json(rows[0]))
        .catch(err => res.send(err));
    },

    // DELETE `/api/sets/:id`
    delete({ set }, res) {
      db
        .query('delete from sets where id = $1', [set.id])
        .then(() => res.status(204).send())
        .catch(err => res.send(err));
    },
  });
