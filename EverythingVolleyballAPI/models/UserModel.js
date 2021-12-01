const mongoose = require("mongoose");

const UserModel = new mongoose.Schema(
    {
        username: {type:String, required:true, unique:true},
        email:{type:String, require:true, unique:true},
        password: {type:String, required: true},
        isAdmin: {
            type: Boolean,
            default: false,
        },
    }, {timestamps:true}
);

module.exports = mongoose.model("User", UserModel);