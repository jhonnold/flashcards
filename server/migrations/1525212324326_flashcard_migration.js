exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('flashcards', {
    id: {
      type: 'serial',
      primaryKey: true,
      notNull: true,
    },
    setId: {
      type: 'integer',
      notNull: true,
      references: '"sets"',
      onDelete: 'cascade',
    },
    frontside: {
      type: 'text',
    },
    backside: {
      type: 'text',
    },
    order: {
      type: 'integer',
      notNull: true,
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {};
