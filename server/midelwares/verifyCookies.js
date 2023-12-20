

const verifyCookies = (req, res) => {
    const auth = req.cookies.nomComplet;
    //console.log(req.cookies)
    if ( auth) {
      console.log('cookie verification passed') 
      const nomComplet = decodeURIComponent(req.cookies.nomComplet);
      console.log({ nomComplet });
      
      res.status(200).json({ nomComplet });
      
    } else {
      res.status(401).json({ error: 'Non autorisé : Veuillez vous connecter.' });
    }
  };
  
  module.exports =verifyCookies ;
  