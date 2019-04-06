module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Customer.associate = (models) => {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Customer.hasMany(models.burgers, {
      onDelete: "cascade"
    });
  };

  Customer
    .findOrCreate({ where: { id: 1 }, defaults: { name: 'Guest' } })
    .spread(function (user, created) {
      console.log(user.get({
        plain: true
      }));
      //console.log(created)
    })

  return Customer;
};


