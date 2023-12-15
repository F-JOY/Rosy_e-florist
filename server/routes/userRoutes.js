const express=require('express')
const userRoutes=express.Router()
const userSevice=require('../services/userServices')


userRoutes.route('/').get(userSevice.getAllUsers);
userRoutes.route('/:login').get(userSevice.getUserByLogin)

module.exports=userRoutes