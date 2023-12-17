const {Users}= require('../models/models')


exports.getAllUsers=async(req,res)=>{
    Users.findAll()
    .then(users => {
      res.json(users);
      console.log("Réponse envoyée avec le code :", res.statusCode);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des users depuis la base de données:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des users depuis la base de données' });
    });
}


exports.getUserByLogin=async(req,res)=>{
    const userLogin = req.params.login;
    Users.findOne({
      where: { login: userLogin }
    })
      .then(user => {
        if (user) {
          res.json(user);
          console.log("Réponse envoyée avec le code :", res.statusCode);
        } else {
          res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de l\'utilisateur depuis la base de données:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur depuis la base de données' });
      });
}

exports.addLike = async (req, res) => {
  try {
    const usr = await Users.findByPk(req.user.id);
    const bouquet = await Bouquets.findByPk(req.params.id);

    console.log('User:', usr);
    console.log('Bouquet:', bouquet);

    if (!usr || !bouquet) {
      throw new Error('Utilisateur ou bouquet introuvable');
    }

    const hasLiked = await usr.hasBouquet(bouquet);

    if (hasLiked) {
      return res.status(200).json({ message: 'L\'utilisateur a déjà aimé ce bouquet.' });
    }
    const result = await usr.addBouquet(bouquet);

    res.status(200).json({ result: result.length, data: result });
  } catch (error) {
    console.error(error);
    throw new Error('Erreur lors de l\'ajout du like');
  }
};
