(function () {
    var _a = require('mongoose'), model = _a.model, Schema = _a.Schema;
    var categorySchema = new Schema({
        name: String,
        ingredientList: [String],
        createdAt: String
    });
    var Category = model('Category', categorySchema);
    module.exports = Category;
})();
