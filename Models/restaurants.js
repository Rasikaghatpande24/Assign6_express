const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantsSchema = Schema({
    name: {
        type: String,
        required: true
    },
    location_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('restaurant', RestaurantsSchema, 'restaurants');