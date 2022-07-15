(() => {
const userResolvers = require('./database/users/users-resolvers');
const ingredientResolvers = require('./database/ingredients/ingredients-resolvers');

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

module.exports = resolvers;
})();