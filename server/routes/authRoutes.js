const express=require('express')
const authRouter=express.Router();
const {login}=require('../services/authService')

authRouter.route("/").post(login);

module.exports=authRouter