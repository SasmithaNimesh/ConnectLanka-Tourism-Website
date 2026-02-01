const mongoose = require('mongoose');

// 1. Connect
mongoose.connect('mongodb://127.0.0.1:27017/connectLankaDB')
    .then(() => console.log('✅ Connected. Seeding data...'))
    .catch(err => console.log(err));

// 2. Define Schema (Must match server.js)
const districtSchema = new mongoose.Schema({
    name: String,
    coords: String,
    zoom: Number,
    info: String,
    attractions: [{ name: String, imagePath: String, description: String }]
});
const District = mongoose.model('District', districtSchema);

// 3. The Data
const data = [
    {
        name: "Anuradhapura",
        coords: "Anuradhapura, Sri Lanka",
        zoom: 12,
        info: "The ancient capital. Home to the sacred Bo Tree.",
        attractions: [
            { name: "Jaya Sri Maha Bodhi", imagePath: "/images/bodhi.jpg", description: "Oldest tree." },
            { name: "Ruwanwelisaya", imagePath: "/images/stupa.jpg", description: "Magnificent stupa." }
        ]
    },
    {
        name: "Colombo",
        coords: "Colombo, Sri Lanka",
        zoom: 13,
        info: "The commercial capital.",
        attractions: [
            { name: "Lotus Tower", imagePath: "/images/lotus.jpg", description: "Tallest tower." }
        ]
    }
    // You can add more districts here following this pattern
];

// 4. Insert Data
const seedDB = async () => {
    await District.deleteMany({}); // Clears old broken data
    await District.insertMany(data);
    console.log("✅ Database populated! You can now run the server.");
    mongoose.connection.close();
};

seedDB();