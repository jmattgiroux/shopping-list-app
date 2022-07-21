(() => {
const { ApolloServer } = require('apollo-server');
const { connect } = require('mongoose');
const url = require('./database/config');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

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
    }
});


connect(url)
    .then(() => {
        console.log("Database is connected");
        return server.listen({ port });
    })
    .then((result) => {
        console.log("Server running at " + result.url);
    })
    .catch((err) => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });
})();