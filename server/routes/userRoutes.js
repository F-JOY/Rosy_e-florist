const express=require('express')
const userRoutes=express.Router()
const userSevice=require('../services/userServices')
const verifieToken=require('../midelwares/verifyToken');
const verifyCookies=require('../midelwares/verifyCookies')

userRoutes.route('/').get(userSevice.getAllUsers);

userRoutes.route('/info/token').get(verifieToken,userSevice.getUserInfo);
userRoutes.route('/info/cookies').get(verifyCookies);

module.exports=userRoutes