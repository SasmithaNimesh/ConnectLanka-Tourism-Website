const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: String,
    username: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    nationality: String,
    password: { type: String, required: true },
    role: { type: String, default: 'traveler' } // traveler | hotel | guide | partner
});

module.exports = mongoose.model('User', UserSchema, 'users');
