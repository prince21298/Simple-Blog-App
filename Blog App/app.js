const express=require('express')
const dotenv=require('dotenv').config()
const jwt=require('jsonwebtoken')
const datetime = require('node-datetime');
const s_key = process.env.s_key
const port = process.env.port
const cors = require('cors')
const app=express()  
app.use(express.json())
app.use(cors())

var signup_user=require("./source/c_signup")
var post_data=require('./source/c_post')

var signup=express.Router();
app.use('/',signup)
require("./main_routes/signup")(signup,signup_user,jwt,s_key)


var login=express.Router()
app.use('/',login)
require("./main_routes/signin")(login,signup_user,jwt,s_key)


var post=express.Router();
app.use('/',post)
require('./main_routes/b_post')(post,post_data,jwt,s_key,datetime,signup_user)


var get_blog=express.Router()
app.use('/',get_blog)
require('./main_routes/g_blog')(get_blog,post_data,jwt,s_key)

var update=express.Router()
app.use('/',update)
require('./main_routes/update')(update,post_data,signup_user,jwt,s_key)


var Delete=express.Router()
app.use("/",Delete)
require('./main_routes/Delete')(Delete,post_data,signup_user,jwt,s_key)

var logout=express.Router()
app.use('/',logout)
require("./main_routes/logout")(logout)

app.listen(port,function(){
    console.log('your server is working on port no.. ',port)
})