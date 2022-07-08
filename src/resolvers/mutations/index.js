// code is from here: https://towardsdatascience.com/create-your-graphql-api-and-access-your-mongodb-database-via-apollo-server-deployed-on-heroku-9bf8ca410dc8
const createCoin = require('./createCoin');
const updateCoin = require('./updateCoin');
const deleteCoin = require('./deleteCoin');

module.exports = { createCoin, updateCoin, deleteCoin }