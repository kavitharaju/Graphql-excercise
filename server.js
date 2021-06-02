const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/typedefs.js');
const { resolvers } = require('./schema/resolver.js');
const { VachanAPI } = require('./datasource.js')


const server = new ApolloServer({ typeDefs, resolvers,  dataSources: () => ({vachanAPI: new VachanAPI()})});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
