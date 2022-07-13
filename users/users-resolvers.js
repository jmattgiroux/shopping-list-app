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
            console.log(result);
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
        users: async() => await User.find()
    }
};

module.exports = userResolvers;