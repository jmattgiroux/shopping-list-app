// Code is from here: https://towardsdatascience.com/create-your-graphql-api-and-access-your-mongodb-database-via-apollo-server-deployed-on-heroku-9bf8ca410dc8
const models = require('../../models/index');


module.exports = async (_, { input }, { models }) => {
    newERC20Coin = await models.ERC20Coin.create(input);
    return newERC20Coin;
}