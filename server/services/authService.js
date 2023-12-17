const {Users} = require('../models/models');
const bcrypt = require("bcrypt");
const asyncHandler = require('express-async-handler');


exports.login = asyncHandler(async (req, res, next) => {
    // Recherche de l'utilisateur par login (ou email, selon votre modèle)
    //const lg  = "user2" ;
    //console.log(req.body);
    const lg = req.body.login;
    //console.log(lg);
    const user = await Users.findOne({ where: { login: lg} });
  
    if (!user) {
      // L'utilisateur n'a pas été trouvé
      res.status(401).json({ error: 'Identifiants incorrects' });
      return;
    }
    const psw  = req.body.PSW
//console.log("req psw : "+psw)
    //const psw = "123abc";
    // Vérification du mot de passe
    const isPasswordCorrect = (psw === user.PSW)
    console.log(isPasswordCorrect)
   // console.log('user psw : '+user.PSW)
    if (!isPasswordCorrect) {
      // Mot de passe incorrect
      res.status(401).json({ error: 'Identifiants incorrects : Mot de passe Incorrect' });
      return;
    }
    
  const token = user.generateToken();
  res.status(200).json({
    idUser: user.idUser,
    login: user.login,
    nomComplet: user.nomComplet,
    token,
  });
  

  });
  