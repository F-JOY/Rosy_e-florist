const express = require("express");
const path = require("path");
const app = express();

const { Users, Fleurs, Bouquets,ContientFleur, sequelize } = require('./models');
const {Op}=require("sequelize")
///////////Connexion BD///////////////////////////

const insertData = require('./insertData');
const authenticateDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Synchroniser la base de données
    await sequelize.sync({ force: false });
    console.log('Tables synchronisées.');

    // Insérer des données
    await insertData();
    console.log('Données de test insérées avec succès.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
authenticateDatabase();

/////////////////cors methode request from client 3000 to server 5000/////////////////////////
const cors = require('cors');
app.use(cors());
////////////////////////////////////////////////////////////////////
app.use("/img", express.static(path.join(__dirname, "../client/views/images")));
app.use("/image", express.static(path.join(__dirname, "../client/views/images")));
app.use("/images", express.static(path.join(__dirname, "../client/views/imagesB")));
app.use("/image", express.static(path.join(__dirname, "../client/views/imagesF")));
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use( "/js",express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use( "/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use("/styles", express.static(path.join(__dirname, "../client/views/styles")));

/////////////npm run build cmd to access react client  from localhost 5000//////////////////
app.use(express.static(path.join(__dirname, '../client/reactClass/build')));
app.use(express.static(path.join(__dirname, '../client/reactFunc/build')));
///////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
 // res.sendFile(path.join(__dirname,'../client/views/indexBS.html'))
  //res.sendFile(path.join(__dirname, '../client/reactClass/build', 'index.html'));
 // res.sendFile(path.join(__dirname, '../client/reactFunc/build', 'index.html'));
  
});


////////////////API to SEND DATA fome SQLITE DBase///////////////////////
app.get("/api/GetBouquetsFromDB", (req, res) => {
  Bouquets.findAll()
    .then(bouquets => {
      res.json(bouquets);
      console.log("Réponse envoyée avec le code :", res.statusCode);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des bouquets depuis la base de données:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des bouquets depuis la base de données' });
    });
});
app.get("/api/GetFleursFromDB", (req, res) => {
  Fleurs.findAll()
    .then(fleurs => {
      res.json(fleurs);
      console.log("Réponse envoyée avec le code :", res.statusCode);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des fleurs depuis la base de données:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des fleurs depuis la base de données' });
    });
});
app.get("/api/GetUsersFromDB", (req, res) => {
  Users.findAll()
    .then(users => {
      res.json(users);
      console.log("Réponse envoyée avec le code :", res.statusCode);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des users depuis la base de données:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des users depuis la base de données' });
    });
});
////////////////////////Get user by Login/////////////////
app.get("/api/GetUserByLogin/:login", (req, res) => {
  const userLogin = req.params.login;
  Users.findOne({
    where: { login: 'user1' }
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
});
app.get('/api/contientFleur', async (req, res) => {
  try {
    const associations = await ContientFleur.findAll();
    res.json(associations);
  } catch (error) {
    console.error('Error retrieving associations:', error);
    res.status(500).send('Internal Server Error');
  }
});

//////////////////////////Sans base de donnée///////////////////////////////
const bouquet = require("../Data/bouquets.json");
app.get("/api/getBouquets", (req, res) => {
  res.json(bouquet);
  console.log("Réponse envoyée avec le code :", res.statusCode);
});
const fleurs = require("../Data/fleurs.json");
app.get("/api/fleurs", (req, res) => {
  res.json(fleurs);
  console.log("Réponse envoyée avec le code :", res.statusCode);
});
/*
app.put('/api/like', (req, res) => {
  const bouquetId = parseInt(req.query.bouquetId);
  const bouquetaModifier = bouquet.find(b => b.id === bouquetId);
  if (bouquetaModifier) {
    bouquetaModifier.like = !bouquetaModifier.like ;
    
     console.log("bouquet modifier avec succés  "+bouquetId)
  } else {
    console.log(req.query.bouquetId)
    console.log("bouquet non trouver");
  }
});
*/
app.put('/api/like/:bouquetId', (req, res) => {
  const bouquetId = parseInt(req.params.bouquetId);
  const bouquetaModifier = bouquet.find(b => b.id === bouquetId);
  if (bouquetaModifier) {
    bouquetaModifier.like = !bouquetaModifier.like;
    res.json(bouquetaModifier);
    console.log(bouquetaModifier);
    console.log("Bouquet modifié avec succès : " + bouquetId);
    res.status(200).send("Bouquet modifié avec succès");
  } else {
    console.log("Bouquet non trouvé : " + bouquetId);
    res.status(404).send("Bouquet non trouvé");
  }
});

app.listen(5000, () => {
  console.log("listen on port " + 5000);
});






















/*
//for auto reloading on the browser
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const liveReloadServer = livereload.createServer();
//liveReloadServer.watch(__dirname); to watch the whole project
liveReloadServer.watch(path.join(__dirname, "app.js"));
liveReloadServer.watch(path.join(__dirname, "../client/views"));
liveReloadServer.watch(path.join(__dirname, "../client/views/styles"));
app.use(connectLivereload());*/