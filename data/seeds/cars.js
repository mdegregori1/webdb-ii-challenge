
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {VIN:'ter453d', make:'BMW', model: 'X6', mileage: 4324},
        {VIN:'dsf3xc4', make: 'Mazda', model: '3', mileage: 54864},
        {VIN:'5454dg5', make: 'Chevy', model: 'Silverado', mileage: 10000}
      ]);
    });
};
