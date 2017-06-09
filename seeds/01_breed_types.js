exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('breed').del()
    .then(function() {
    // Inserts seed entries
    return knex('breed').insert([{
        "breed-type": 'Welsh Corgi'
      },
      {
        "breed-type": 'German'
      },
      {
        "breed-type": 'Great Dane'
      },
      {
        "breed-type": 'Pitbull'
      },
      {
        "breed-type": 'Chow Chow'
      }
    ]);
  });
};
