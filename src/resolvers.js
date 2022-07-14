const userResolvers = require('./users/users-resolvers');
const ingredientResolvers = require('./ingredients/ingredients-resolvers');

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