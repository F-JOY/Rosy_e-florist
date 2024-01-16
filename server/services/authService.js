const { Users } = require('../models/models');
const asyncHandler = require('express-async-handler');

exports.login = asyncHandler(async (req, res, next) => {
    // Recherche de l'utilisateur par login (ou email, selon votre modèle)
    const lg = req.body.login;
    console.log("login = " + lg);

    const user = await Users.findOne({ where: { login: lg } });

    if (!user || user.PSW !== req.body.PSW) {
        // L'utilisateur n'a pas été trouvé ou mot de passe incorrect
        res.status(401).json({ error: 'Identifiants incorrects' });
        return;
    }

    res.cookie('nomComplet', user.nomComplet, { httpOnly: false, sameSite: 'None', secure: true });

    const token = user.generateToken();
    res.status(200).json({
        auth: true,
        nomComplet: user.nomComplet,
        token,
    });
});
