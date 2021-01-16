const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: String,
        required: true
    },
    bountyAmount: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("BountyModel", BountySchema)