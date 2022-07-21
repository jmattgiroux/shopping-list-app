(function () {
    var _a = require("mongoose"), model = _a.model, Schema = _a.Schema;
    var userSchema = new Schema({
        email: String,
        password: String,
        createdAt: String,
    });
    var User = model("User", userSchema);
    module.exports = User;
})();
