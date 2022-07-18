const { gql } = require('graphql-tag');

const typeDefs = gql `

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

# Shopping List related definitions

type ShoppingList {
    id: String
    user: User
    ingredients: [Ingredient]
    createdAt: String
}

input ShoppingListInput {
    user: String!
    ingredients: [String]
}

input ShoppingListId {
    id: String!
}

type Query {
    # user queries
    users: [User]
    user(UserId: UserId): User!

    # ingredient queries
    ingredients: [Ingredient]
    ingredient(IngredientId: IngredientId): Ingredient!

    # shopping list queries
    shoppingLists: [ShoppingList]
    shoppingList(ShoppingListId: ShoppingListId): ShoppingList!
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

    # shopping list mutations
    createShoppingList(ShoppingListInput: ShoppingListInput): ShoppingList!
    deleteShoppingList(ShoppingListId: ShoppingListId): ShoppingList!
    updateShoppingList(ShoppingListInput: ShoppingListInput, ShoppingListId: ShoppingListId): ShoppingList!
}
`;

module.exports = typeDefs;