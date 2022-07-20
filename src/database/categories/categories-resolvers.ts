(() => {
const Category = require("./categories-model");
// const Ingredient = require('../ingredients/ingredients-model');

const categoryResolvers = {
    Mutation: {
        async createCategory(_, { CategoryInput: { name, ingredient } }) {
            const newCategory = new Category({
                name: name,
                ingredient: [ingredient],
                createdAt: new Date().toISOString()
            });

            const result = await newCategory.save();
            console.log(result);
            return {
                id: result.id,
                ...result._doc
            };
        },

        async updateCategory(_, { CategoryInput: { name, ingredient }, CategoryId: { id } }) {

            const update = { name, ingredient };

            // documentation: https://mongoosejs.com/docs/api.html#model_Model-findByIdAndUpdate
            let result = await Category.findByIdAndUpdate(id, update, {
                returnDocument: 'after'
            })

            return {
                id: result.id,
                ...result._doc
            };
        },

        async deleteCategory(_, { CategoryId: { id } }) {

            // documentation for this: https://mongoosejs.com/docs/api.html#model_Model-findByIdAndRemove
            let result = await Category.findByIdAndRemove(id)

            return {
                id: result.id,
                ...result._doc
            };
        }
    },
    Query: {
        categories: async() => await Category.find({}),
        category: async(_, { CategoryId: { id } }) => await Category.findById(id)

    }
};

module.exports = categoryResolvers;

})();