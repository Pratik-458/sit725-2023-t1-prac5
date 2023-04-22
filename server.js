var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require("./dbconnection");
let router = require("./route/route");

var port = process.env.port || 3000;

app.use("/", router);

app.get("/home", (req, res) => {
  res.render("index.html");
});

app.listen(port, () => {
  console.log("listening on port:" + port);
});
