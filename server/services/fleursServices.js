const {Fleurs} = require('../models/models')
const staticFleurs=require('../../Data/fleurs.json')

//////////////////SQLite DB data ////////////////////////
exports.getDBFleurs=async(req,res)=>{
    Fleurs.findAll()
    .then(fleurs => {
      res.json(fleurs);
      console.log("Réponse envoyée avec le code :", res.statusCode);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des fleurs depuis la base de données:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des fleurs depuis la base de données' });
    });
}

////////////static data/////////////////////
exports.getStaticFleurs=async(req,res)=>{
    res.json(staticFleurs);
}