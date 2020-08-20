const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const public_DIR = path.resolve(__dirname, "public");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

let PORT = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/", express.static( public_DIR));
// app.use(express.static(__dirname + "/public"));


app.get("/api/notes", function(req, res){
    fs.readFile("db/db.json", "utf8", function(err, data){
        if(err) throw err;
        res.json(JSON.parse(data));
    })
})

app.listen(PORT, function(){
    console.log("application is running on " + PORT);
});

