const express = require("express");
const path = require("path");
const app = express();
const staticRoutes=require('./routes/staticRoutes')
const { Users, Fleurs, Bouquets,ContientFleur } = require('./models/models');
const initiateDB=require('./outils/initBD')
const bouquetRouter=require('./routes/bouquetRoutes')
///////////Connexion BD///////////////////////////

initiateDB();

/////////////////cors methode request from client 3000 to server 5000/////////////////////////
const cors = require('cors');
const fleurRouter = require("./routes/fleurRoutes");
const userRoutes = require("./routes/userRoutes");
app.use(cors());
/////////////////////////////Routes des fichiers ///////////////////////////////////////
staticRoutes.forEach(route => {
  app.use(route.url, express.static(path.join(__dirname, route.directory)));
});

///////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
 // res.sendFile(path.join(__dirname,'../client/views/indexBS.html'))
  //res.sendFile(path.join(__dirname, '../client/reactClass/build', 'index.html'));
 // res.sendFile(path.join(__dirname, '../client/reactFunc/build', 'index.html'));
  
});


app.use("/api/Bouquets",bouquetRouter);
app.use('/api/Fleurs',fleurRouter);
app.use('/api/Users',userRoutes)

app.listen(5000, () => {
  console.log("listen on port " + 5000);
});

