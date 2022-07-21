(() => {
    const { model, Schema } = require('mongoose');
// const User = require('../users/users-model');

const shoppingListSchema = new Schema({
    userName: String,
    // ingredient: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
    shoppingListItems: [String],
    createdAt: String
});

const ShoppingList = model('Shopping-List', shoppingListSchema);

module.exports = ShoppingList;
})();