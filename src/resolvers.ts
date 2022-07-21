(() => {
const userResolvers = require('./database/users/users-resolvers');
const ingredientResolvers = require('./database/ingredients/ingredients-resolvers');
const shoppingListResolvers = require('./database/shopping-list/shopping-list-resolvers');

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
})();