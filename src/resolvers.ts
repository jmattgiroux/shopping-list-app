(() => {
const userResolvers = require('./database/users/users-resolvers');
const ingredientResolvers = require('./database/ingredients/ingredients-resolvers');
const categoryResolvers = require('./database/categories/categories-resolvers');

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...ingredientResolvers.Query,
        ...categoryResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...ingredientResolvers.Mutation,
        ...categoryResolvers.Mutation
    },
};

module.exports = resolvers;
})();