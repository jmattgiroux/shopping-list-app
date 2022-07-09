// app.js
// requires for this file
const { ApolloServer, gql } = require('apollo-server');
const { connect, model, Schema } = require('mongoose');
// TODO import typedefs and resolvers

// TODO move all the stuff below into other files

// Models
const userSchema = new Schema({
    email: String,
    password: String,
    createdAt: String
});

const User = model('User', userSchema);

// resolvers
const userResolvers = {
    Mutation: {
        async createUser(_, { UserInput: { email, password } }) {
            const newUser = new User({
                email: email,
                password: password,
                createdAt: new Date().toISOString()
            });

            const result = await newUser.save();
            console.log(result);
            return {
                id: result.id,
                ...result._doc
            };
        }
    },
    // This is why async await for query:
    // https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed
    Query: {
        // message: (_, { ID }) => Message.findById(ID)
        users: async (_, { }) => await User.find()
    }
};

const resolvers = {
    Query: {
        ...userResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation
    },
};

// types
const typeDefs = gql`
type User {
    email: String
    password: String
    createdAt: String
}

input UserInput {
    email: String
    password: String
}

type Query {
    users: [User]
}

type Mutation {
    createUser(UserInput: UserInput): User!
}
`



// TODO Move this to model or config file
require('dotenv').config();
const url = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;

// Stuff for this file, app.js
const server = new ApolloServer({
    typeDefs,
    resolvers
});

connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log("Database is connected");
        return server.listen({ port });
    })
    .then((result) => {
        console.log("Server running at " + result.url);
    })