const mongoose = require("./config"),
    Schema = mongoose.Schema;

const schemas = {
    userSchema: new Schema({
        id_: Schema.Types.ObjectId,
        user: String,
        password: String,
        role:String
    }),
}


const models = {
    user: mongoose.model("users", schemas.userSchema),
};

module.exports = models;