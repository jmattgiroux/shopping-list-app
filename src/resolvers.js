const userResolvers = require('./users/users-resolvers');
const ingredientResolvers = require('./ingredients/ingredients-resolvers');
const shoppingListResolvers = require('./shopping-list/shopping-list-resolvers');

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...ingredientResolvers.Query,
        ...shoppingListResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...ingredientResolvers.Mutation,
        ...shoppingListResolvers.Mutation
    },
};

module.exports = resolvers;