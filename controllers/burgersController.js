// Create all our routes and set up logic within those routes where required.
const path = require("path");

const db = require("../models");

function removeSpecials(str) {
  return str.replace(/[^\-.!,&$%?\w\s]/gi, '');
}

//createDefaultCustomer();

function createDefaultCustomer() {
  db.Customer
    .findOrCreate({ where: { id: 1 }, defaults: { name: 'Guest' } })
    .spread(function (user, created) {
      // console.log(user.get({
      //   plain: true
      // }));
      //console.log(created)
    })
}

module.exports = (app) => {
  app.get("/", (req, res) => {
    db.burgers.findAll({include: [db.Customer],
      order: [
        ['burger_name', 'ASC']
    ],
    }).then((dbBurger) => {
        db.Customer.findAll({
        }).then((dbCustomer) => {
          const hbsObject = {
            burgers: dbBurger,
            customers: dbCustomer
          };
          res.render("index", hbsObject);
        });
    });
  });

  // app.get("/burgers/customer/", (req, res) => {
  //   db.burgers.findAll({
  //     include: [db.Customer],
  //     where: {
  //       customerId: req.body.customerId
  //     }
  //   }).then((dbPost) => {
  //     const hbsObject = {
  //       burgers: dbPost
  //     };
  //     res.render("index", hbsObject);
  //   });
  // });

  app.post("/api/burgers", (req, res) => {
    db.burgers.create({
      burger_name: removeSpecials(req.body.burger_name),
      description: removeSpecials(req.body.description),
      CustomerId: removeSpecials(req.body.CustomerId),
    }).then((result) => {
      // We have access to the new todo as an argument inside of the callback function
      res.json({ id: result.insertId });
    });
  });

  app.put("/api/burgers/update/:id", (req, res) => {
    db.burgers.update(
      {
        burger_name: removeSpecials(req.body.burger_name),
        description: removeSpecials(req.body.description)
      },
      {
        where: {
          id: req.params.id
        }
      }).then((dbPost) => {
        res.status(200).end();
      }).catch((req, res) => {
        return res.status(404).end();
      });
  });

  app.put("/api/burgers/:id", (req, res) => {
    db.burgers.update(
      { devoured: req.body.devoured },
      {
        where: {
          id: req.params.id
        }
      }).then((dbPost) => {
        res.status(200).end();
      }).catch((req, res) => {
        return res.status(404).end();
      });
  });

  app.put("/api/burgers/fav/:id", (req, res) => {
    let fav = false;
    if (req.body.favorite == 1) {
      fav = true;
    }
    db.burgers.update(
      { favorite: fav },
      {
        where: {
          id: req.params.id
        }
      }).then((dbPost) => {
        res.status(200).end();
      }).catch((req, res) => {
        return res.status(404).end();
      });
  });

  app.delete("/api/burgers/:id", (req, res) => {
    db.burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then((result) => {
      res.json(result);
    });
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/error.html"));
  });

  return app;
}