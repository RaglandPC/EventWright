
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  // app.post("/profile", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../models/user.js"));
  // });

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });

  app.get("/event", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/event.html"));
  });

  app.post('/event', function (req, res) {
    res.sendFile(path.join(__dirname, "../models/event.js"));
  })

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/chatroom", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chatroom.html"));
  });

};
