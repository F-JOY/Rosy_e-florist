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
/*****************************************************
* @Desc   DIS Like For Bouquet
* @Methode  POST 
* @Route    /api/v1/user/dislike/:id
* @Param    idbouquets id
* @Body     No Body
* @Access Private condition est connecter Token dans le header 
******************************************************/
exports.removeLike = async (req, res) => {
  try {
    const usr = await Users.findByPk(req.user.id);
    const bouquet = await Bouquets.findByPk(req.params.id);

    console.log('User:', usr);
    console.log('Bouquet:', bouquet);

    if (!usr || !bouquet) {
      throw new Error('Utilisateur ou bouquet introuvable');
    }

    // Vérifiez si l'utilisateur a déjà aimé le bouquet
    const hasLiked = await usr.hasBouquet(bouquet);

    if (!hasLiked) {
      return res.status(200).json({ message: "L'utilisateur n'a pas encore aimé ce bouquet." });
    }

    // Utilisez la méthode Sequelize pour supprimer la relation many-to-many
    const result = await usr.removeBouquet(bouquet);

    res.status(200).json({ result: result.length, data: result+" OK" });
  } catch (error) {
    console.error(error);
    throw new Error("Erreur lors du retrait du like");
  }
};
/*****************************************************
* @Desc   GET all bouquets  user liked
* @Methode  GET 
* @Route    /api/v1/user/bouquets/
* @Param    NO Param
* @Body     No Body
* @Access Private condition est connecter Token dans le header 
******************************************************/
exports.getLikedBouquets = async (req, res) => {
  try {
    const usr = await Users.findByPk(req.user.id, {
      include: 'Bouquets', // Inclure la relation many-to-many avec les bouquets
    });

    if (!usr) {
      throw new Error('Utilisateur introuvable');
    }

    // Récupérer la liste des bouquets aimés par l'utilisateur
    const likedBouquets = usr.Bouquets || [];

    res.status(200).json({ likedBouquets });
  } catch (error) {
    console.error(error);
    throw new Error('Erreur lors de la récupération des bouquets aimés');
  }
};
/*****************************************************
* @Desc   GET All User Informations ||idUser||login||nomComplet
* @Methode  GET 
* @Route    /api/v1/user/Info/
* @Param    NO Param
* @Body     No Body
* @Access Private condition est connecter Token dans le header 
******************************************************/
exports.getUserInfo = async (req, res) => {
  try {
    // Récupérer l'ID de l'utilisateur à partir du token JWT
    const userId = req.user.id;

    // Rechercher l'utilisateur par son ID
    const user = await Users.findByPk(userId);

    if (!user) {
      throw new Error('Utilisateur introuvable');
    }

    // Retourner les informations de l'utilisateur
    res.status(200).json({
      idUser: user.idUser,
      login: user.login,
      nomComplet: user.nomComplet,
      // Ajoutez d'autres champs d'information si nécessaire
    });
  } catch (error) {
    console.error(error);
    throw new Error('Erreur lors de la récupération des informations de l\'utilisateur');
  }
};