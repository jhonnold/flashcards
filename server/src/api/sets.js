import resource from 'resource-router-middleware';

export default ({ config, db }) =>
  resource({
    id: 'set',

    // Called before requests that take an :id
    load(req, id, callback) {
      const set = null;
      const err = 'TODO';
      callback(err, set);
    },

    // GET `/api/sets`
    index({ params }, res) {
      res.send('TODO');
    },

    // POST `/api/sets`
    create({ body }, res) {
      res.send('TODO');
    },

    // GET `/api/sets/:id`
    read({ set }, res) {
      res.send('TODO');
    },

    // PUT `/api/sets/:id`
    update({ set, body }, res) {
      res.send('TODO');
    },

    // DELETE `/api/sets/:id`
    delete({ set }, res) {
      res.send('TODO');
    },
  });
