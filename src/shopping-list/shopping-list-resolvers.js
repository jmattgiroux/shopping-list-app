const Ingredient = require('../ingredients/ingredients-model');
const ShoppingList = require('./shopping-list-model');

const shoppingListResolvers = {
    Mutation: {
        async createShoppingList(_, { ShoppingListInput: { name } }) {
            const newShoppingList = new ShoppingList({
                name: name,
                user: user,
                ingredients: [Ingredient],
                createdAt: new Date().toISOString()
            });

            const result = await newShoppingList.save();
            console.log(result);
            return {
                id: result.id,
                ...result._doc
            };
        },

        async updateShoppingList(_, { ShoppingListInput: { name }, ShoppingListId: { id } }) {

            const update = { name, ingredients };

            // documentation: https://mongoosejs.com/docs/api.html#model_Model-findByIdAndUpdate
            let result = await ShoppingList.findByIdAndUpdate(id, update, {
                returnDocument: 'after'
            })

            return {
                id: result.id,
                ...result._doc
            };
        },

        async deleteShoppingList(_, { ShoppingListId: { id } }) {

            // documentation for this: https://mongoosejs.com/docs/api.html#model_Model-findByIdAndRemove
            let result = await ShoppingList.findByIdAndRemove(id)

            return {
                id: result.id,
                ...result._doc
            };
        }
    },
    Query: {
        shoppingList: async() => await ShoppingList.find({}),
        shoppingList: async(_, { ShoppingListId: { id } }) => await ShoppingList.findById(id)

    }
};

module.exports = shoppingListResolvers;