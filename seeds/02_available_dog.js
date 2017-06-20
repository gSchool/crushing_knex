exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('available_dog').del()
    .then(function() {
      // Inserts seed entries
      return knex('available_dog').insert([
        {
          name: 'Banksy',
          age: 4,
          city: "Denver",
          state: "CO",
          zip: 80239,
          breed_id: 1
        },
        {
          name: 'Bella',
          age: 5,
          city: "Denver",
          state: "CO",
          zip: 80239,
          breed_id: 1
        },
        {
          name: 'Koko',
          age: 15,
          city: "Tampa",
          state: "FL",
          zip: 33603,
          breed_id: 5
        },
        {
          name: 'Karma',
          age: 12,
          city: "Cheyenne",
          state: "WY",
          zip: 82001,
          breed_id: 4
        },
        {
          name: 'Dutchess',
          age: 17,
          city: "Cheyenne",
          state: "WY",
          zip: 82009,
          breed_id: 2
        },
        {
          name: 'Billy Bob',
          age: 2,
          city: "Denver",
          state: "CO",
          zip: 80110,
          breed_id: 3
        },
      ]);
    });
};
