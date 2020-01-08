const db = require('../../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function add(event) {
  return db('events')
    .insert(event, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db('employees as e')
    .select('e.*');
}

function findBy(filter) {
  return db('events')
    .select('*')
    .where(filter);
}

function findById(id) {
  return db('events')
    .select('*')
    .where({ id })
    .first();
}

function update(changes, id){
    return db('events')
        .where({ id: id})
        .update(changes);
}

function remove(id){
    return db('events')
        .where({ id: id })
        .del();
}
