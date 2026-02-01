const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
    ownerId: String,
    name: String,
    desc: String,
    logo: String
});

module.exports = mongoose.model('Partner', PartnerSchema, 'partners');
