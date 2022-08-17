const mongoose = require('mongoose')

const bakerySchema = new mongoose.Schema({
    name: {type: String, required: true}
})

const Bakery = mongoose.model('Bakery',bakerySchema)

module.exports = Bakery;