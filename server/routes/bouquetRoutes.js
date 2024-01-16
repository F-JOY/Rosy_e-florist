const express= require('express')
const bouquetRouter=express.Router();
const bouquetService=require('../services/bouquetServices')
const verifyCookies=require('../midelwares/verifyCookies');

  if(verifyCookies){
    
  }else{
   
  }
   
  bouquetRouter.route("/db").get(bouquetService.getDBBouquet)
 // bouquetRouter.route("/db").get(verifyCookies,bouquetService.getDBBouquet)
  // bouquetRouter.route("/db").get(bouquetService.getDBBouquetsansD)




bouquetRouter.route("/static").get(bouquetService.getStaticBouquet);
bouquetRouter.route("/like/static/:bouquetId").put(bouquetService.likeStaticBouquet)
module.exports=bouquetRouter;