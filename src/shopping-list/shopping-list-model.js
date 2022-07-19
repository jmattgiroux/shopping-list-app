const { model, Schema } = require('mongoose');
// const User = require('../users/users-model');

const shoppingListSchema = new Schema({
    user: String,
    ingredient: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
    createdAt: String
});

const ShoppingList = model('Shopping-List', shoppingListSchema);

module.exports = ShoppingList;