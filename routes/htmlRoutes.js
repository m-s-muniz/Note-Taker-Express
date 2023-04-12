const router = require('express').Router();
const path = require('path');

// Routes to the notes.html webpage
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// Routes to the index.html webpage
router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = router;
