const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    ownerId: String,
    name: String,
    desc: String,
    image: String,
    location: String,
    price: Number
});

module.exports = mongoose.model('Hotel', HotelSchema, 'hotels');
