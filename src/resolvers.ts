(() => {
const userResolvers = require('./database/users/users-resolvers');
const ingredientResolvers = require('./database/ingredients/ingredients-resolvers');
const shoppingListResolvers = require('./database/shopping-list/shopping-list-resolvers');
const categoryResolvers = require('./database/categories/categories-resolvers');

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...ingredientResolvers.Query,
        ...shoppingListResolvers.Query
        ...categoryResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...ingredientResolvers.Mutation,
        ...shoppingListResolvers.Mutation
        ...categoryResolvers.Mutation
    },
};

module.exports = resolvers;
})();