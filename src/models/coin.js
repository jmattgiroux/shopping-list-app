// code is from here: https://towardsdatascience.com/create-your-graphql-api-and-access-your-mongodb-database-via-apollo-server-deployed-on-heroku-9bf8ca410dc8
const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const erc20CoinSchema = new Schema({
    name: {
        type: String,
        trim: true
    }
});

const ERC20Coin = model("ERC20Coin", erc20CoinSchema);
module.exports = { ERC20Coin };