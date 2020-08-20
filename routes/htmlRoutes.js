let path = require("path");
const fs = require("fs");
const public_DIR = path.resolve(__dirname,"..", "public");

module.exports = (app) => {
    app.get("/", function(req, res){
        res.sendFile(path.join(public_DIR, "index.html"));
    });
    
    app.get("/notes", function(req, res){
        res.sendFile(path.join(public_DIR, "notes.html"));
    });
}