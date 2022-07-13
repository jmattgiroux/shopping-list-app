const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

# Where I found the Response Definition stuff: https://www.apollographql.com/tutorials/fullstack-quickstart/building-a-schema 
# General Definitions
type Response {
    success: Boolean!
    message: String
}

# User Related Definitions
type User {
    id: String
    email: String
    password: String
    createdAt: String
}

input UserInput {
    email: String!
    password: String!
}

input UserId {
    id: String!
}

# Ingredient related definitions

type Ingredient {
    name: String
    createdAt: String
}

input IngredientInput {
    name: String!
}

type Query {
    # user queries
    users: [User]

    # ingredient queries
    ingredients: [Ingredient]
}

type Mutation {
    # user mutations
    createUser(UserInput: UserInput): User!
    deleteUser(UserId: UserId): Response!
    updateUser(UserInput: UserInput, UserId: UserId): User!

    # ingredient mutations
    createIngredient(IngredientInput: IngredientInput): Ingredient!
}
`;

module.exports = typeDefs;