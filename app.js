const { ApolloServer, gql } = require('apollo-server');
const { connect, model, Schema } = require('mongoose');
const url = require('./src/db/config');
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');

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