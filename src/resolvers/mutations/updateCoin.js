// code is from here: https://towardsdatascience.com/create-your-graphql-api-and-access-your-mongodb-database-via-apollo-server-deployed-on-heroku-9bf8ca410dc8
const { models } = require("mongoose")

module.exports = async (_, { id, input }, { models }) => {
    const ERC20CoinToUpdate = await models.ERC20Coin.findOne({ _id: id });

    Object.keys(input).forEach(value => {
        ERC20CoinToUpdate[value] = input[value];
    });

    const updatedERC20Coin = await ERC20CoinToUpdate.save();
    return updatedERC20Coin;
}