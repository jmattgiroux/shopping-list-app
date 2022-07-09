// app.js
// requires for this file
const { ApolloServer, gql } = require('apollo-server');
const { connect, model, Schema } = require('mongoose');
// TODO import typedefs and resolvers

// TODO move all the stuff below into other files

// Models
const messageSchema = new Schema({
    text: String,
    createdAt: String,
    createdBy: String
});

const Message = model('Message', messageSchema);

// resolvers
const messagesResolvers = {
    Mutation: {
        async createMessage(_, { messageInput: { text, username } }) {
            const newMessage = new Message({
                text: text,
                createdBy: username,
                createdAt: new Date().toISOString()
            });

            const res = await newMessage.save();
            console.log(res);
            return {
                id: res.id,
                ...res._doc
            };
        }
    },
    // This is why async await for query:
    // https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed
    Query: {
        // message: (_, { ID }) => Message.findById(ID)
        messages: async (_, { }) => await Message.find()
    }
};

const resolvers = {
    Query: {
        ...messagesResolvers.Query
    },
    Mutation: {
        ...messagesResolvers.Mutation
    },
};

// types
const typeDefs = gql`
type Message {
    text: String
    createdAt: String
    createdBy: String
}

input MessageInput {
    text: String
    username: String
}

type Query {
    message(id: ID!): Message
    messages: [Message]
}

type Mutation {
    createMessage(messageInput: MessageInput): Message!
}
`



// TODO Move this to model or config file
require('dotenv').config();
const url = process.env.DATABASE_URL;
const PORT = process.env.port || 3000;

// Stuff for this file, app.js
const server = new ApolloServer({
    typeDefs,
    resolvers
});

connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log("Database is connected");
        return server.listen({ PORT });
    })
    .then((result) => {
        console.log("Server running at " + result.url);
    })