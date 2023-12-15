const {Bouquets} = require('../models/models')
const staticBouquet= require('../../Data/bouquets.json')
////////////////SQLite database///////////////
exports.getDBBouquet=async(req,res)=>{
    Bouquets.findAll()
    .then(bouquets => {
      res.json(bouquets);
      console.log("Réponse envoyée avec le code :", res.statusCode);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des bouquets depuis la base de données:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des bouquets depuis la base de données' });
    });
}

/////////////static data//////////////////////////////////
exports.getStaticBouquet=async(req,res)=>{
  res.json(staticBouquet);
  console.log("Réponse envoyée avec le code :", res.statusCode);

}

exports.likeStaticBouquet = async (req, res) => {
  try {
    const bouquetId = parseInt(req.params.bouquetId);
    const bouquetaModifier = staticBouquet.find(b => b.id === bouquetId);
    if (bouquetaModifier) {
      bouquetaModifier.like = !bouquetaModifier.like;
      res.json(bouquetaModifier);
      console.log("Bouquet modifié avec succès : " + bouquetId);
    } else {
      console.log("Bouquet non trouvé : " + bouquetId);
      res.status(404).json({ error: "Bouquet non trouvé" });
    }
  } catch (error) {
    console.error('Erreur lors de la modification du bouquet:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};
