const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  app.post(
    "/api/login",
    handleLogin,
    passport.authenticate("local", {
      failureRedirect: "/"
    }),
    (req, res) => {
      return res.send({ success: true, user: req.user });
    }
  );

  async function handleLogin(req, res, next) {
    let email = req.body.email;
    let password = req.body.email;

    email = email.toLowerCase();
    email = email.trim();

    const existingUser = await User.findOne({ email: email });

    if (existingUser == null) {
      return res.send({
        success: false,
        message: "User with email does not exist."
      });
    }
    if (!existingUser.validPassword(password, existingUser.password)) {
      return res.send({ success: false, message: "Incorrect password!" });
    }
    if (existingUser) {
      return next();
    }
  }

  app.post(
    "/api/register",
    handleRegister,
    passport.authenticate("local", {
      failureRedirect: "/"
    }),
    (req, res) => {
      return res.send({ success: true, user: req.user });
    }
  );

  async function handleRegister(req, res, next) {
    let { name, email, password } = req.body;

    email = email.toLowerCase();
    email = email.trim();

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.send({ success: false, message: "Email already in use." });
    }

    const user = await new User();
    user.email = email;
    user.password = user.generateHash(password);
    user.name = name;
    user.save((err, user) => {
      if (err) {
        return console.log(err);
      }
      return next();
    });
  }

  /*
      LOGOUT USER
  */
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send("asdf");
  });
};
