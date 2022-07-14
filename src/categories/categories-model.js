const { model, Schema } = require('mongoose');

const categorytSchema = new Schema({
    name: String,
    createdAt: String
});

const Category = model('Category', categorySchema);

module.exports = Category;