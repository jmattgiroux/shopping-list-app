var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(function () {
    var userResolvers = require('./database/users/users-resolvers');
    var ingredientResolvers = require('./database/ingredients/ingredients-resolvers');
    var categoryResolvers = require('./database/categories/categories-resolvers');
    var resolvers = {
        Query: __assign(__assign(__assign({}, userResolvers.Query), ingredientResolvers.Query), categoryResolvers.Query),
        Mutation: __assign(__assign(__assign({}, userResolvers.Mutation), ingredientResolvers.Mutation), categoryResolvers.Mutation),
    };
    module.exports = resolvers;
})();
