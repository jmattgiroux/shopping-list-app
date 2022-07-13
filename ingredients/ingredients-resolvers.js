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
        }
    },
    Query: {
        // ingredients: (_, { ID }) => Ingredient.findById(ID)
        ingredients: async () => await Ingredient.find({})
    }
};

module.exports = ingredientResolvers;