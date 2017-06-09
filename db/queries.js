const knex = require('./knex');

module.exports = {
  getAllBreed: () => {
    return knex('breed');
  },
  getOneBreed: () => {
    return knex('breed').where('breed-type', breed).first();
  },
  createBreed: () => {
    return knex('breed').insert(breed, 'id');
  },
  getAllDog: () => {
    return knex('dog');
  },
  getOneDog: () => {
    return knex('dog').where('name', name).first();
  },
  createDog: () => {
    return knex('dog').insert(dog, 'id');
  }
};
