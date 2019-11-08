// inside models.js
const { Sequelize } = require("sequelize");
// Create a variable that is a connection to the database.
const sequelize = new Sequelize({
  database: "wherefit_db",
  dialect: "postgres",
  define: {
    underscored: true
  }
});
class Location extends Sequelize.Model {}
Location.init(
  {
    name: Sequelize.STRING,
    image_url: Sequelize.STRING,
    description: Sequelize.STRING,
    address_line1: Sequelize.STRING,
    address_line2: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "location"
  }
);

class Activity extends Sequelize.Model {}
Activity.init(
  {
    name: Sequelize.STRING,
    date: Sequelize.DATE,
    description: Sequelize.STRING,
    duration: Sequelize.STRING,
    recommended: Sequelize.STRING,
    cost: Sequelize.STRING,
    completion: Sequelize.STRING,
    fitness_level: Sequelize.INTEGER
  },
  {
    sequelize,
    modelName: "activity"
  }
);

class User extends Sequelize.Model {}
User.init(
  {
    username: Sequelize.STRING,
    password_digest: Sequelize.STRING,
    image_url: Sequelize.STRING,
    fitness_level: Sequelize.INTEGER,
    email: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "user"
  }
);
User.hasMany(Location, { onDelete: "cascade" });
Location.belongsTo(User);
Location.hasMany(Activity, { onDelete: "cascade" });
Activity.belongsTo(Location);
module.exports = {
  User,
  Location,
  Activity,
  sequelize
};
