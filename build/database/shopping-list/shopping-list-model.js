(function () {
    var _a = require('mongoose'), model = _a.model, Schema = _a.Schema;
    // const User = require('../users/users-model');
    var shoppingListSchema = new Schema({
        userName: String,
        // ingredient: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
        shoppingListItems: [String],
        createdAt: String
    });
    var ShoppingList = model('Shopping-List', shoppingListSchema);
    module.exports = ShoppingList;
})();
