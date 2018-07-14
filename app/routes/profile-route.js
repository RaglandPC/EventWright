var db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function (app) {

    // Update profile

    app.post("/profile", function (req, res) {
        db.User.update(req.body).then(function (dbUser) {
            res.json(dbUser);
        });
    });

};
