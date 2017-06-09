exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('breed').del()
    .then(function() {
    // Inserts seed entries
    return knex('breed').insert([{
        breed: 'Welsh Corgi'
      },
      {
        breed: 'German Shepherd'
      },
      {
        breed: 'Great Dane'
      },
      {
        breed: 'Pitbull'
      },
      {
        breed: 'Chow Chow'
      }
    ]);
  });
};
