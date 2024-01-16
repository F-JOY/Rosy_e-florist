const {Bouquets,Fleurs,Users} = require('../models/models')
const staticBouquet= require('../../Data/bouquets.json')
const verifyCookie = require("../midelwares/verifyCookies")
////////////////SQLite database///////////////
exports.getDBBouquet=async(req,res)=>{
  
  try {
    const bouquets = await Bouquets.findAll({
      include: [
        { model: Fleurs, as: 'Fleurs' },
        { model: Users, as: 'Users', through: { attributes: [] } } // Ajoutez cette ligne pour inclure les utilisateurs sans les attributs de liaison
      ],
    });

    // Compter le nombre total de "likes" pour chaque bouquet
    const bouquetsWithLikes = await Promise.all(bouquets.map(async (bouquet) => {
      const likeCount = await bouquet.countUsers();
      return {
        idBouquet: bouquet.idBouquet,
        nom: bouquet.nom,
        descr: bouquet.descr,
        prix: bouquet.prix,
        image: bouquet.image,
        Fleurs: bouquet.Fleurs.map(fleur => ({
          idFleur: fleur.idFleur,
          nom: fleur.nom,
          prix: fleur.prix,
          image: fleur.image,
          ContientFleur: {
            quantite: fleur.ContientFleur ? fleur.ContientFleur.qntt : 0,
          },
        })),
        LikesCount: likeCount, 
      };
    }));

    res.status(200).json({ result: bouquetsWithLikes.length, data: bouquetsWithLikes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des bouquets avec fleurs et likes.' });
  }
}
//////////////////////////bouquet san detaile/////////////////////////////////////////
exports.getDBBouquetsansD=async(req,res)=>{
  try {
    const bouquets = await Bouquets.findAll({
      include: [
        { model: Fleurs, as: 'Fleurs' },
      ],
    });

   
    const bouquetsSansD = await Promise.all(bouquets.map(async (bouquet) => {
      return {
        idBouquet: bouquet.idBouquet,
        nom: bouquet.nom,
        image: bouquet.image,
      };
    }));

    res.status(200).json({  data: bouquetsSansD });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des bouquets avec fleurs et likes.' });
  }
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
