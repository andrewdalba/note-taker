let db = require("../db/db.json");
const path = require("path");
const fs = require("fs");

module.exports = (app) => {
    app.get("/api/notes", function (req, res) {
        return res.json(db)
    });
    app.post("/api/notes", function(req, res){
        let newNoteguy = {
            title: req.body.title,
            text: req.body.text,
            id: db.length //assigns the ID of the new note to the amount of notes currently saved
        };
        db.push(newNoteguy);
 
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db), err => {
            if (err) { console.log(err) }
            res.send(newNoteguy);
            console.log("Your Note has been saved!");

        });
        
    });
    app.delete("/api/notes/:id", function (req, res){
        db.splice(req.params.id, 1); 
        // remove 1 element at the index of the id selected
        // remove note selected
        // splice([element to remove], [how many elements to remove starting at the index of that element])
        db.forEach(note => {
            note.id = db.indexOf(note)
            // sets the id of each note to match the index in the object
        });


        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
            if (err) { console.log(err) }
            
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db), err => {
                if (err) { console.log(err) }
                console.log(db);
                res.send(db);
                console.log("Your note has been deleted!")
            });
        });

        
    });


}