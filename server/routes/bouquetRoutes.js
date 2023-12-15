const express= require('express')
const bouquetRouter=express.Router();
const bouquetService=require('../services/bouquetServices')

bouquetRouter.route("/db").get(bouquetService.getDBBouquet);
bouquetRouter.route("/static").get(bouquetService.getStaticBouquet);
bouquetRouter.route("/like/static/:bouquetId").put(bouquetService.likeStaticBouquet)
module.exports=bouquetRouter;