const ShoppingList = require('./shopping-list-model');

const shoppingListResolvers = {
    Query: {
        shoppingLists: async () => await ShoppingList.find({}),
        shoppingList: async (_, { ShoppingListId: { id } }) => await ShoppingList.findById(id)

    }
};

module.exports = shoppingListResolvers;