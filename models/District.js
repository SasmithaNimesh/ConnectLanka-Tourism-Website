const mongoose = require('mongoose');

const AttractionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imagePath: { type: String, required: true }, // Example: "/images/sigiriya.jpg"
    description: { type: String, required: true }
});

const DistrictSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    coords: { type: String, required: true },
    zoom: { type: Number, default: 12 },
    info: { type: String },
    attractions: [AttractionSchema] 
});

module.exports = mongoose.model('District', DistrictSchema);