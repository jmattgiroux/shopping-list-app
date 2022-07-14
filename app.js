const { ApolloServer } = require('apollo-server');
const { connect } = require('mongoose');
const url = require('./src/db/config');
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');

const port = process.env.PORT || 3000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    formatError: (err) => {
        if (err.message.startsWith('Database Error: ')) {
            return new Error('Internal server error');
        }

        return err;
    },
    formatError(err) {
        if (err.originalError instanceof AuthenticationError) {
            return new Error('Invalid Authentication');
        }
    },
});

connect(url)
    .then(() => {
        console.log("Database is connected");
        return server.listen({ port });
    })
    .then((result) => {
        console.log("Server running at " + result.url);
    })