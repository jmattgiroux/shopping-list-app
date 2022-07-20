(function () {
    require('dotenv').config();
    var url = process.env.DATABASE_URL;
    module.exports = url;
})();
