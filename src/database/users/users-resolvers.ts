(() => {
    const User = require("./users-model");
    const userResolvers = {
        Mutation: {
            async createUser(_, { UserInput: { email, password } }) {
                const newUser = new User({
                    email: email,
                    password: password,
                    createdAt: new Date().toISOString(),
                });

                const result = await newUser.save();

                return {
                    id: result.id,
                    ...result._doc,
                };
            },

            async updateUser(
                _,
                { UserInput: { email, password }, UserId: { id } }
            ) {
                const update = { email, password };

                // documentation: https://mongoosejs.com/docs/api.html#model_Model-findByIdAndUpdate
                let result = await User.findByIdAndUpdate(id, update, {
                    returnDocument: "after",
                });

                return {
                    id: result.id,
                    ...result._doc,
                };
            },

            async deleteUser(_, { UserId: { id } }) {
                // documentation for this: https://mongoosejs.com/docs/api.html#model_Model-findByIdAndRemove
                let result = await User.findByIdAndRemove(id);

                return {
                    id: result.id,
                    ...result._doc,
                };
            },
        },

        Query: {
            users: async () => await User.find(),
            user: async (_, { UserId: { id } }) => await User.findById(id),
        },
    };

    module.exports = userResolvers;
})();
