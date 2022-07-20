(() => {
const { gql } = require('apollo-server');

const typeDefs = gql`

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
    id: String
    name: String
    createdAt: String
}

input IngredientInput {
    name: String!
}

input IngredientId {
    id: String!
}

# Category related definitions

type Category {
    id: String
    name: String
    ingredient: [String]
    createdAt: String
}

input CategoryInput {
    name: String!
    ingredient: [String]
}

input CategoryId {
    id: String!
}

type Query {
    # user queries
    users: [User]
    user(UserId: UserId): User!

    # ingredient queries
    ingredients: [Ingredient]
    ingredient(IngredientId: IngredientId): Ingredient!

    # category queries
    categories: [Category]
    category(CategoryId: CategoryId): Category!
}

type Mutation {
    # user mutations
    createUser(UserInput: UserInput): User!
    deleteUser(UserId: UserId): User!
    updateUser(UserInput: UserInput, UserId: UserId): User!

    # ingredient mutations
    createIngredient(IngredientInput: IngredientInput): Ingredient!
    deleteIngredient(IngredientId: IngredientId): Ingredient!
    updateIngredient(IngredientInput: IngredientInput, IngredientId: IngredientId): Ingredient!

    # category mutations
    createCategory(CategoryInput: CategoryInput): Category!
    deleteCategory(CategoryId: CategoryId): Category!
    updateCategory(CategoryInput: CategoryInput, CategoryId: CategoryId): Category!
}
`;

module.exports = typeDefs;
})();