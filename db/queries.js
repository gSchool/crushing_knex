const knex = require('./knex');

module.exports = {
  breed: {
    getAll: function() {
      return knex('breed');
    },
    getOne: function(id) {
      return knex('breed').where('id', id).first();
    },
    create: function(breed) {
      return knex('breed').insert(breed).returning('*');
    }
  },
  dog: {
    getAll: function() {
      return knex('dog');
    },
    getOne: function(name) {
      return knex('dog').where('name', name).first();
    },
    create: function(dog) {
      return knex('dog').insert(dog).returning('*');
    }
  }
};
