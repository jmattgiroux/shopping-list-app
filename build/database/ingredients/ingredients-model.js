(function () {
    var _a = require("mongoose"), model = _a.model, Schema = _a.Schema;
    var ingredientSchema = new Schema({
        name: String,
        createdAt: String,
    });
    var Ingredient = model("Ingredient", ingredientSchema);
    module.exports = Ingredient;
})();
