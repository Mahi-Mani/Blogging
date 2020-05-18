const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        console.log("inside find");
        console.log("email", req.body);
        db.User.findOne({
            email: req.body.email
        }).then(dbModel => {
            console.log(dbModel);
            if(dbModel.password === req.body.password) {
                res.json(dbModel);
            } else {
                res.send("Incorrect password");
            }
            
        })
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    }
}