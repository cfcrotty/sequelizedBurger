// Create all our routes and set up logic within those routes where required.
const path = require("path");

const db = require("../models");

function removeSpecials(str) {
    return str.replace(/[^\-.!,\w\s]/gi, '');
}

module.exports = (app) => {
      app.post("/api/customer/add/", (req, res) => {
        db.Customer.create({
          name: removeSpecials(req.body.name)
        }).then((result) => {
          // We have access to the new todo as an argument inside of the callback function
          res.json({ id: result.insertId });
        });
      });

    return app;
}