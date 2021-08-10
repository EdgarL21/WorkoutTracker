const express = require('express'); // requires express
const router = express.Router(); // requires router
const path = require("path"); // requires path

// get route for index.html which is the home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,  "../public/index.html"));
});

// get route for exercise page whihc is where we could add exercises
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname,  "../public/exercise.html"));
});

// get route for stats which is where we could see 
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname,  "../public/stats.html"));
});

// exports router and gets required in the server.js file
module.exports = router;