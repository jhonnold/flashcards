import resource from 'resource-router-middleware';

export default ({ config, db }) =>
  resource({
    mergeParams: true,
    id: 'flashcard',

    // Called before requests that take an :id
    load(req, id, callback) {
      db
        .query('select * from flashcards where id = $1', [id])
        .then(({ rows }) => {
          if (rows.length === 0) callback('Not Found.');
          callback(null, rows[0]);
        })
        .catch(({ message }) => callback(message));
    },

    // GET `/api/flashcards`
    index({ query }, res) {
      db
        .query('select * from flashcards')
        .then(({ rows }) => res.json(rows))
        .catch(({ message }) => res.status(500).send(message));
    },

    // POST `/api/flashcards`
    create({ body }, res) {
      db
        .query(
          'insert into flashcards ("setId", frontside, backside, "order") values ($1, $2, $3, $4) returning *',
          [body.setId, body.frontside, body.backside, body.order],
        )
        .then(({ rows }) => res.json(rows[0]))
        .catch(({ message }) => res.status(500).send(message));
    },

    // GET `/api/flashcards/:id`
    read({ flashcard }, res) {
      res.json(flashcard);
    },

    // PUT `/api/flashcards/:id`
    update({ flashcard, body }, res) {
      const permitted = {};
      const whitelist = ['frontside', 'backside', 'order'];
      whitelist.forEach((w) => {
        if (body[w] !== undefined) permitted[w] = body[w];
      });

      const query = ['update flashcards'];
      query.push('set');

      query.push(Object.keys(permitted)
        .map((k, i) => `"${k}" = ($${i + 1})`)
        .join(', '));

      query.push(`where id = ${flashcard.id} returning *`);

      db
        .query(query.join(' '), Object.values(permitted))
        .then(({ rows }) => res.json(rows[0]))
        .catch(({ message }) => res.status(500).send(message));
    },

    // DELETE `/api/flashcards/:id`
    delete({ flashcard }, res) {
      db
        .query('delete from flashcards where id = $1', [flashcard.id])
        .then(() => res.status(204).send())
        .catch(({ message }) => res.status(500).send(message));
    },
  }).post('/batch', ({ body }, res) => {
    const flashcards = body.flashcards.map((f, i) => ({
      ...f,
      order: i + 1,
    }));

    let query = 'insert into flashcards ("setId", frontside, backside, "order") values ';
    flashcards.forEach((f, i) => {
      query += `($${4 * i + 1}, $${4 * i + 2}, $${4 * i + 3}, $${4 * i + 4}), `;
    });
    query = query.slice(0, -2);
    query += ' returning *';

    const queryParams = flashcards.reduce((a, f) => [...a, ...Object.values(f)], []);

    db
      .query(query, queryParams)
      .then(({ rows }) => res.json(rows))
      .catch(({ message }) => res.status(500).send(message));
  });
