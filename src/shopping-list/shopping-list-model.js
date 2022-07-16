const { model, Schema } = require('mongoose');
// const User = require('../users/users-model');

const shoppingListSchema = new Schema({
    name: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    ingredient: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
    createdAt: String
});

const ShoppingList = model('ShoppingList', shoppingListSchema);

module.exports = ShoppingList;