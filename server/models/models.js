const { DataTypes,Sequelize } = require("sequelize");
const {sequelize}=require('../outils/DBconnect')

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

const ContientFleur = sequelize.define('ContientFleur', {
  qntt: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, 
  },
});
Bouquets.belongsToMany(Fleurs, { through: ContientFleur });
Fleurs.belongsToMany(Bouquets, { through: ContientFleur });

module.exports = { Users, Fleurs, Bouquets,ContientFleur };
