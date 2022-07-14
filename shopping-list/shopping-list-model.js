const { model, Schema } = require('mongoose');
//const Ingredient = require('../ingredients/ingredients-model');
//const User = require('../users/users-model');

const shoppingListSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  foodItems: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
});
const ShoppingList = model('ShoppingList', shoppingListSchema);

module.exports = ShoppingList;