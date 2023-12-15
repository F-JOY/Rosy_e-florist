const express=require('express')
const fleurRouter=express.Router()
const fleurService=require('../services/fleursServices')

fleurRouter.route('/db').get(fleurService.getDBFleurs)
fleurRouter.route('/static').get(fleurService.getStaticFleurs)

module.exports=fleurRouter