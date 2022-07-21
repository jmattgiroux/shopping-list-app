(() => {
    const { model, Schema } = require('mongoose');

    const categorySchema = new Schema({
        name: String,
        ingredientList: [String],
        createdAt: String
    });

    const Category = model('Category', categorySchema);

    module.exports = Category;
})();