// index.js

// modules =================================================
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const path = require("path");

const app = express();

// configuration ===========================================

// config files
require("dotenv").config();
require("./models/User");

// connect to mongoDB
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// connect app to Passport.js
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.use(express.static(path.join(__dirname, "public/dist/ataraxia")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("public/dist"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "public", "dist", "ataraxia", "index.html")
    );
  });
}

// set port
const PORT = process.env.PORT || 8080;

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});

// expose app
exports = module.exports = app;
