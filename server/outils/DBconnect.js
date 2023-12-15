const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./outils/database.sqlite",
});


module.exports = { sequelize };

