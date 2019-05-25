var express = require("express");
var path = require("path");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8000;
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT:" + PORT);
});