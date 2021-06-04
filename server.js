const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/typedefs.js');
const { resolvers } = require('./schema/resolver.js');
const { VachanAPI, CatalogNext } = require('./schema/datasource.js')

const knexConfig = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'password',
    database : 'dummy_catalog_next'
  }
};

// you can also pass a knex instance instead of a configuration object
const db = new CatalogNext(knexConfig);


const server = new ApolloServer({ typeDefs, resolvers,  dataSources: () => ({vachanAPI: new VachanAPI(), catalogNext: db})});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
