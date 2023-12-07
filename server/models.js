const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});
const Users = sequelize.define("Users", {
  idUser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  PSW: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  nomComplet: {
    type: DataTypes.STRING,
    defaultValue: "USER",
  },
});

const Fleurs = sequelize.define("Fleurs", {
  idFleur: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  descr: {
    type: DataTypes.STRING,
  },
  prix: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Bouquets = sequelize.define("Bouquets", {
  idBouquet: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  descr: {
    type: DataTypes.STRING,
  },
  prix: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Users.belongsToMany(Bouquets, { through: "UserLikes" });
Bouquets.belongsToMany(Users, { through: "UserLikes" });

Bouquets.belongsToMany(Fleurs, { through: "contientFleur" });
Fleurs.belongsToMany(Bouquets, { through: "contientFleur" });

module.exports = { Users, Fleurs, Bouquets, sequelize };
