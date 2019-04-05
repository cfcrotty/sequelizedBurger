module.exports = (sequelize, DataTypes) => {
  const burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  
  // Post.associate = function (models) {
  //   models.Post.belongsTo(models.Author, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return burgers;
};

/*
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  select: function(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  selectOne: function(condition, cb) {
    orm.selectOne("burgers", condition, (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: function(cols, vals, cb) {
    orm.deleteOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
*/