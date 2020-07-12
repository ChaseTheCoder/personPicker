const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
    name: [String],
})

const Name = mongoose.model("Name", nameSchema)

 module.exports = Name;