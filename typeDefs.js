const { ApolloServer, gql } = require('apollo-server');

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
`;

module.exports = typeDefs;