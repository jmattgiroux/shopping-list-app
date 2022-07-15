(() => {
const { ApolloServer, gql } = require('apollo-server');
const { connect, model, Schema } = require('mongoose');
const url = require('./database/config');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const port = process.env.PORT || 3000;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

connect(url)
    .then(() => {
        console.log("Database is connected");
        return server.listen({ port });
    })
    .then((result) => {
        console.log("Server running at " + result.url);
    })
})();