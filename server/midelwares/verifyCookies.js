

const verifyCookies = (req, res, next) => {
    const auth = req.cookies.auth;
    console.log(req.cookies)
    if ( auth === 'true') {
      console.log('cookie verification passed')  
      next();
    } else {
      res.status(401).json({ error: 'Non autorisé : Veuillez vous connecter.' });
    }
  };
  
  module.exports =verifyCookies ;
  