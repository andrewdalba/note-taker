const express = require("express");

const path = require("path");
const fs = require("fs");
const public_DIR = path.resolve(__dirname, "public");

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/", express.static(public_DIR));
// app.use(express.static("public"));
// app.use(express.static(__dirname + "/public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// app.get("/api/notes", function(req, res){
//     fs.readFile("db/db.json", "utf8", function(err, data){
//         if(err) throw err;
//         res.json(JSON.parse(data));
//     })
// })

app.listen(PORT, function(){
    console.log("application is running on " + PORT);
});

