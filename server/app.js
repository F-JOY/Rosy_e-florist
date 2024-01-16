const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const initiateDB=require('./outils/initBD')
const staticRoutes=require('./routes/staticRoutes')
const bouquetRouter=require('./routes/bouquetRoutes')
const fleurRouter = require("./routes/fleurRoutes");
const userRoutes = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

///////////Connexion BD///////////////////////////

initiateDB();

/////////////////cors methode request from client 3000 to server 5000/////////////////////////

app.use(cors());
/////////////////////////////Routes des fichiers ///////////////////////////////////////
staticRoutes.forEach(route => {
  app.use(route.url, express.static(path.join(__dirname, route.directory)));
});

///////////////////////////////////////////////////////////////
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
////////////////////////////////////////////////////////////////////
app.get("/", (req, res) => {
 // res.sendFile(path.join(__dirname,'../client/views/indexBS.html'))
  //res.sendFile(path.join(__dirname, '../client/reactClass/build', 'index.html'));
 // res.sendFile(path.join(__dirname, '../client/reactFunc/build', 'index.html'));
  
});


app.use("/api/Bouquets",bouquetRouter);
app.use('/api/Fleurs',fleurRouter);
app.use('/api/Users',userRoutes)
app.use('/api/authentification',authRouter)

app.listen(5000, () => {
  console.log("listen on port " + 5000);
});

