const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");
// GET Route for retrieving all the notes from db.json file
router.get("/notes", (req, res) => {
    const data = fs.readFileSync("db/db.json");
    res.json(JSON.parse(data));
});
// POST Route for submitting newNote, gives it a unique identifier and saves new note
router.post("/notes",(req, res) => {
    const notes = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    notes.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(notes));
    res.json(notes);

});




















module.exports = router;
