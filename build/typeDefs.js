var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
(function () {
    var gql = require('apollo-server').gql;
    var typeDefs = gql(__makeTemplateObject(["\n\n# User Related Definitions\ntype User {\n    id: String\n    email: String\n    password: String\n    createdAt: String\n}\n\ninput UserInput {\n    email: String!\n    password: String!\n}\n\ninput UserId {\n    id: String!\n}\n\n# Ingredient related definitions\n\ntype Ingredient {\n    id: String\n    name: String\n    createdAt: String\n}\n\ninput IngredientInput {\n    name: String!\n}\n\ninput IngredientId {\n    id: String!\n}\n\ntype Query {\n    # user queries\n    users: [User]\n    user(UserId: UserId): User!\n\n    # ingredient queries\n    ingredients: [Ingredient]\n    ingredient(IngredientId: IngredientId): Ingredient!\n}\n\ntype Mutation {\n    # user mutations\n    createUser(UserInput: UserInput): User!\n    deleteUser(UserId: UserId): User!\n    updateUser(UserInput: UserInput, UserId: UserId): User!\n\n    # ingredient mutations\n    createIngredient(IngredientInput: IngredientInput): Ingredient!\n    deleteIngredient(IngredientId: IngredientId): Ingredient!\n    updateIngredient(IngredientInput: IngredientInput, IngredientId: IngredientId): Ingredient!\n}\n"], ["\n\n# User Related Definitions\ntype User {\n    id: String\n    email: String\n    password: String\n    createdAt: String\n}\n\ninput UserInput {\n    email: String!\n    password: String!\n}\n\ninput UserId {\n    id: String!\n}\n\n# Ingredient related definitions\n\ntype Ingredient {\n    id: String\n    name: String\n    createdAt: String\n}\n\ninput IngredientInput {\n    name: String!\n}\n\ninput IngredientId {\n    id: String!\n}\n\ntype Query {\n    # user queries\n    users: [User]\n    user(UserId: UserId): User!\n\n    # ingredient queries\n    ingredients: [Ingredient]\n    ingredient(IngredientId: IngredientId): Ingredient!\n}\n\ntype Mutation {\n    # user mutations\n    createUser(UserInput: UserInput): User!\n    deleteUser(UserId: UserId): User!\n    updateUser(UserInput: UserInput, UserId: UserId): User!\n\n    # ingredient mutations\n    createIngredient(IngredientInput: IngredientInput): Ingredient!\n    deleteIngredient(IngredientId: IngredientId): Ingredient!\n    updateIngredient(IngredientInput: IngredientInput, IngredientId: IngredientId): Ingredient!\n}\n"]));
    module.exports = typeDefs;
})();