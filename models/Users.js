const mongoose = require('mongoose');
const Names = require('./Names');

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    names: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Names"
    }]
});

module.exports = mongoose.model("Users", UsersSchema);

module.exports = Users;