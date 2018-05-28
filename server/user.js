const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
Router.get('/list',function(req,res){
	
})
Router.get('/info',function(req,res){
	//用户有没有cookie
	return res.json({code:1})
})

module.exports = Router