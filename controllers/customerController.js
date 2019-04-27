// Create all our routes and set up logic within those routes where required.
const path = require("path");

const db = require("../models");

function removeSpecials(str) {
    return str.replace(/[^\-.!,&$%?\w\s]/gi, '');
}

module.exports = (app) => {
      app.post("/api/customer/add/", (req, res) => {
        db.Customer.create({
          name: removeSpecials(req.body.name)
        }).then((result) => {
          res.json({ id: result.insertId });
        });
      });

    return app;
}