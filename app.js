const express = require("express");
const mongoose = require("mongoose");

const app = express();
exports.app = app;
require('./config/session.config');

// conenction to mongodb
mongoose.connect("mongodb://localhost/todolist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});




// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/routes.js"));


// server configurations....
app.listen(3000, () => console.log("Server started listening on port: 3000"));
