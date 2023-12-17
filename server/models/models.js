const { DataTypes,Sequelize } = require("sequelize");
const {sequelize}=require('../outils/DBconnect')
const jwt = require('jsonwebtoken');
require('dotenv').config();
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
Users.prototype.generateToken = function () {
  return jwt.sign(
    { id: this.idUser, type: this.type },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRE_TIME,
    }
  );
};
/*
Users.beforeCreate(async function (next) {
  if (!this.isModified("password")) return next();
  //hashing user password
  this.password = await bcrypt.hash(this.password, 10);
  next();
})
*/
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
