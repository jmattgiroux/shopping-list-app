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
    var shoppingListResolvers = require('./database/shopping-list/shopping-list-resolvers');
    var resolvers = {
        Query: __assign(__assign(__assign({}, userResolvers.Query), ingredientResolvers.Query), shoppingListResolvers.Query),
        Mutation: __assign(__assign(__assign({}, userResolvers.Mutation), ingredientResolvers.Mutation), shoppingListResolvers.Mutation),
    };
    module.exports = resolvers;
})();
