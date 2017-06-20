const knex = require('./knex');

module.exports = {
  breed: {
    getAll: function() {
      return knex('breed');
    },
    getOne: function(name) {
      return knex('breed').where('name', name).first();
    },
    create: function(breed) {
      return knex('breed').insert(breed).returning('*');
    }
  },
  dog: {
    getAll: function() {
      return knex('available_dog');
    },
    getOne: function(name) {
      return knex('available_dog').where('name', name).first();
    },
    create: function(dog) {
      return knex('available_dog').insert(dog).returning('*');
    }
  }
};
