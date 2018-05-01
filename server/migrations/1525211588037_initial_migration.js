exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('sets', {
    id: {
      type: 'serial',
      primaryKey: true,
      notNull: true,
    },
    creator: {
      type: 'varchar(256)',
      notNull: true,
    },
    name: {
      type: 'varchar(256)',
      notNull: true,
    },
    description: {
      type: 'text',
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {};
