
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl => {
    // critical
    tbl.increments();
    tbl.string('VIN', 17)
      .unique()
      .notNullable()
      .index()
    tbl.string('make', 150)
      .notNullable()
      .index(); 
    tbl.string('model', 150)
      .notNullable()
      .index();// makes searching for vegetables using this column faster

    tbl.integer('mileage', 6)
      .notNullable()
      .index()    

      // not required
    tbl.string('transmission_type', 150)
    // tbl.boolean('automatic').defaultTo(true)
    tbl.string('status of title ', 150)
      
})
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car-dealer')
  };
  

// The critical information for each car is the VIN, make, model, and mileage.
// - They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.