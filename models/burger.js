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
  
  burgers.associate = function (models) {
    models.burgers.belongsTo(models.Customer, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return burgers;
};