const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrdersavedSchema = new Schema({
    placedBy: {
        type: String,
        required: true
    },
    placedByUserId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('order', OrdersavedSchema, 'orders');