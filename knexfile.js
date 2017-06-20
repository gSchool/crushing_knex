module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/adoption-data',
    seeds: {
      directory: './seeds/',
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
