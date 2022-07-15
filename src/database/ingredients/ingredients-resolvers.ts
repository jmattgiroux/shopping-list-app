(() => {
const Ingredient = require('./ingredients-model');

const ingredientResolvers = {
    Mutation: {
        async createIngredient(_, { IngredientInput: { name } }) {
            const newIngredient = new Ingredient({
                name: name,
                createdAt: new Date().toISOString()
            });

            const result = await newIngredient.save();
            console.log(result);
            return {
                id: result.id,
                ...result._doc
            };
        },

        async updateIngredient(_, { IngredientInput: { name }, IngredientId: { id } }) {

            const update = { name };

            // documentation: https://mongoosejs.com/docs/api.html#model_Model-findByIdAndUpdate
            let result = await Ingredient.findByIdAndUpdate(id, update, {
                returnDocument: 'after'
            })

            return {
                id: result.id,
                ...result._doc
            };
        },

        async deleteIngredient(_, { IngredientId: { id } }) {

            // documentation for this: https://mongoosejs.com/docs/api.html#model_Model-findByIdAndRemove
            let result = await Ingredient.findByIdAndRemove(id)

            return {
                id: result.id,
                ...result._doc
            };
        }
    },
    Query: {
        ingredients: async () => await Ingredient.find({}),
        ingredient: async (_, { IngredientId: { id } }) => await Ingredient.findById(id)

    }
};

module.exports = ingredientResolvers;

})();