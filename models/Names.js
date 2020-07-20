const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const Names = mongoose.model("Names", nameSchema)

module.exports = Names;