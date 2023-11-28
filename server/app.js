const express = require("express");
const path = require("path");
const app = express();

//for auto reloading on the browser
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const liveReloadServer = livereload.createServer();
//liveReloadServer.watch(__dirname); to watch the whole project
liveReloadServer.watch(path.join(__dirname, "app.js"));
liveReloadServer.watch(path.join(__dirname, "../client/views"));
liveReloadServer.watch(path.join(__dirname, "../client/views/styles"));
app.use(connectLivereload());
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
  res.sendFile(path.join(__dirname, '../client/reactClass/build', 'index.html'));
 // res.sendFile(path.join(__dirname, '../client/reactFunc/build', 'index.html'));
  
});

////////////API for react app function version//////////
const Data = require("../client/reactFunc/src/data/mesBouquets.json");
app.get("/api/bouquets", (req, res) => {
  res.json(Data);
  console.log("Réponse envoyée avec le code :", res.statusCode);
});

app.put("/api/bouquets/like/:id", (req, res) => {
  const bouquetId = parseInt(req.params.id);
  const newBouquet = Data.find((bouquet) => bouquet.id === bouquetId);
  if (newBouquet) {
    newBouquet.like = !newBouquet.like;
    res.json({
      message: 'Valeur "like" mise à jour pour le bouquet ID ' + bouquetId,
      bouquet:newBouquet
    });
  } else {
    res.status(404).json({ error: "Bouquet non trouvé" });
  }
});


//////////////API for react app Class version///////////////
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
app.put('/api/like', (req, res) => {
  const bouquetId = parseInt(req.query.bouquetId);
  const bouquetaModifier = bouquet.find(b => b.id === bouquetId);
  if (bouquetaModifier) {
    bouquetaModifier.like = !bouquetaModifier.like ;
    
     console.log("bouquet modifier avec succés")
  } else {
    console.log(req.query.bouquetId)
    console.log("bouquet non trouver");
  }
});



app.listen(5000, () => {
  console.log("listen on port " + 5000);
});
