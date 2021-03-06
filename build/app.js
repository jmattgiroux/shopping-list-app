(function () {
    var ApolloServer = require('apollo-server').ApolloServer;
    var connect = require('mongoose').connect;
    var url = require('./database/config');
    var typeDefs = require('./typeDefs');
    var resolvers = require('./resolvers');
    var port = process.env.PORT || 3000;
    var server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
        csrfPrevention: true,
        cache: "bounded",
        formatError: function (err) {
            if (err.message.startsWith('Database Error: ')) {
                return new Error('Internal server error');
            }
            return err;
        }
    });
    connect(url)
        .then(function () {
        console.log("Database is connected");
        return server.listen({ port: port });
    })
        .then(function (result) {
        console.log("Server running at " + result.url);
    })
        .catch(function (err) {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });
})();
