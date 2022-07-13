const User = require('./users-model');

const userResolvers = {
    Mutation: {
        async createUser(_, { UserInput: { email, password } }) {
            const newUser = new User({
                email: email,
                password: password,
                createdAt: new Date().toISOString()
            });

            const result = await newUser.save();

            return {
                id: result.id,
                ...result._doc
            };
        },

        // Resource for this method: https://mongoosejs.com/docs/tutorials/findoneandupdate.html#atomic-updates
        async updateUser(_, { UserInput: { email, password }, UserId: { id } }) {

            const update = { email, password };

            let result = await User.findByIdAndUpdate(id, update, {
                returnDocument: 'after'
            })

            return {
                id: result.id,
                ...result._doc
            };
        }
    },
    // This is why async await for query:
    // https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed
    Query: {
        // users: (_, { ID }) => User.findById(ID)
        users: async () => await User.find()
    }
};

module.exports = userResolvers;