// app.js
// requires for this file
const { ApolloServer, gql } = require('apollo-server');
const { connect, model, Schema } = require('mongoose');
// TODO import typeDefs and resolvers

// TODO move all the stuff below into other files

// Models

//User Model
const userSchema = new Schema({
    email: String,
    password: String,
    createdAt: String
});

const User = model('User', userSchema);

//Ingredient Model
const ingredientSchema = new Schema({
    name: String,
    createdAt: String
});

const Ingredient = model('Ingredient', ingredientSchema);

// resolvers
// User Revolver
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
        // users: (_, { ID }) => User.findById(ID)
        users: async() => await User.find()
    }
};


// Ingredient Revolver
const ingredientResolvers = {
    Mutation: {
        async createIngredient(_, { IngredientInput: { name } }) {
            const newIngredient = new Ingredient({
                name: name,
                createdAt: new Date().toISOString()
            });

            const result = await newIngredient.save();
            console.log(result);
            return {
                id: result.id,
                ...result._doc
            };
        }
    },
    Query: {
        // ingredients: (_, { ID }) => Ingredient.findById(ID)
        ingredients: async() => await Ingredient.find()
    }
};

//All Resolvers
const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...ingredientResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...ingredientResolvers.Mutation
    },
};


// types
const typeDefs = gql `
type User {
    email: String
    password: String
    createdAt: String
}

input UserInput {
    email: String!
    password: String!
}

type Ingredient {
    name: String
    createdAt: String
}

input IngredientInput {
    name: String!
}

type Query {
    users: [User]
    ingredients: [Ingredient]
}

type Mutation {
    createUser(UserInput: UserInput): User!
    createIngredient(IngredientInput: IngredientInput): Ingredient!
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

connect(url)
    .then(() => {
        console.log("Database is connected");
        return server.listen({ port });
    })
    .then((result) => {
        console.log("Server running at " + result.url);
    })