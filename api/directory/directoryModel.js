const db = require('../../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function add(employee) {
  return db('employees')
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
  return db('employees')
    .select('*')
    .where(filter);
}

function findById(id) {
  return db('employees')
    .select('*')
    .where({ id })
    .first();
}

function update(changes, id){
    return db('employees')
        .where({ id: id})
        .update(changes);
}

function remove(id){
    return db('employees')
        .where({ id: id })
        .del();
}
