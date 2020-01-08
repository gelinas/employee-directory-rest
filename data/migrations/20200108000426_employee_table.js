exports.up = function(knex) {
  return knex.schema.createTable('employees', employees => {
    // .increments() creates a primary key, integer without negative values (unsigned)
    employees.increments(); // primary key automatically named 'id'
    
    employees.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now())
    
    employees.timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.fn.now())

    employees.string('first_name', 255)
      .notNullable();

    employees.string('last_name', 255)
      .notNullable();

    employees.string('phone', 255)
      .notNullable();

    employees.string('email', 255)
      .notNullable();

    employees.string('address', 255)
      .notNullable();

    employees.string('city', 255)
      .notNullable();

    employees.string('state', 255)
      .notNullable();

    employees.string('zip', 255)
      .notNullable();

    employees.string('photo', 255)
      .notNullable();

    employees.string('notes', 255);
  });
};

exports.down = function(knex) {
  // drop tables in reverse order when using foreign keys
  return knex.schema
      .dropTableIfExists('employees');
};
