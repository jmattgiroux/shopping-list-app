// code is from here: https://towardsdatascience.com/create-your-graphql-api-and-access-your-mongodb-database-via-apollo-server-deployed-on-heroku-9bf8ca410dc8
module.exports = async (_, { id }, { models }) => {
    const deleteCoin = await models.ERC20Coin.deleteOne({ _id: id });

    if (deleteCoin.deletedCount) return { id: id }
}