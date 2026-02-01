const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
    ownerId: String,
    name: String,
    desc: String,
    image: String,
    roleTitle: String,
    languages: String,
    qualifications: String,
    rating: { type: Number, default: 5 }
});

module.exports = mongoose.model('Guide', GuideSchema, 'guides');
