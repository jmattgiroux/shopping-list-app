(() => {
    const { model, Schema } = require('mongoose');
    
    const ingredientSchema = new Schema({
        name: String,
        createdAt: String
    });
    
    const Ingredient = model('Ingredient', ingredientSchema);
    
    module.exports = Ingredient;
})();
