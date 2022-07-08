// Code is from here: https://towardsdatascience.com/create-your-graphql-api-and-access-your-mongodb-database-via-apollo-server-deployed-on-heroku-9bf8ca410dc8
const mutations = require('./mutations');
const queries = require('./queries');

module.exports = {
    Mutation: {
        ...mutations
    },
    Query: {
        ...queries
    }
}