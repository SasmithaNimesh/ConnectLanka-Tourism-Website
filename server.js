const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { exec } = require("child_process");

// Models
const User = require("./models/User");
const District = require("./models/District");
const Hotel = require("./models/Hotel");
const Guide = require("./models/Guide");
const Partner = require("./models/Partner");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/connectlanka")
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Error:", err));

// ===================== AUTH =====================
app.post("/api/signup", async (req, res) => {
    try {
        await User.create(req.body);
        res.json({ message: "User created successfully" });
    } catch {
        res.status(400).json({ error: "User already exists" });
    }
});

app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ $or: [{ username }, { email: username }] });
    if (!user || user.password !== password) return res.status(401).json({ error: "Invalid credentials" });
    res.json({ username: user.username, role: user.role });
});

// ===================== TRAVEL DATA =====================
app.get("/api/hotels", async (req, res) => {
    try { res.json(await Hotel.find()); } 
    catch (err) { res.status(500).json({ error: "Failed to fetch hotels" }); }
});

app.get("/api/guides", async (req, res) => {
    try { res.json(await Guide.find()); } 
    catch (err) { res.status(500).json({ error: "Failed to fetch guides" }); }
});

app.get("/api/partners", async (req, res) => {
    try { res.json(await Partner.find()); } 
    catch (err) { res.status(500).json({ error: "Failed to fetch partners" }); }
});

app.get("/api/districts", async (req, res) => {
    try { res.json(await District.find()); } 
    catch (err) { res.status(500).json({ error: "Failed to fetch districts" }); }
});

// ===================== PROLOG AI =====================
app.post("/api/prolog-ai-options", (req, res) => {
    const { budget, interest } = req.body;

    const query = `swipl -q -s prolog/ai_rules.pl -g "findall([D,H,T], travel_recommendations(${budget}, ${interest.toLowerCase()}, D,H,T), L), write(L), halt."`;

    exec(query, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: "Prolog execution failed" });
        if (stderr) console.error("Prolog stderr:", stderr);

        try {
            let output = stdout.trim();
            if (output.startsWith('[') && output.endsWith(']')) output = output.slice(1, -1);

            const options = output
                .split('],[')
                .map(str => str.replace(/[\[\]]/g, '').split(',').map(s => s.trim()));

            res.json({ options });
        } catch (e) {
            console.error("Parsing error:", e);
            res.status(500).json({ error: "Failed to parse Prolog output" });
        }
    });
});

// ===================== START SERVER =====================
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
