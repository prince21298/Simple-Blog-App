module.exports=((signup,signup_user,jwt,s_key)=>{
    signup.post('/signup',(req,res)=>{
        var body= req.body
        var user=new signup_user({
            name:body.user_name,
            email:body.email,
            password:body.password
        })
        if (user.email.includes('@')){
            user.save(function(err,data){
                if(!err){
                    // res.send(data.name + " saved to users")
                    signup_user.findOne({email:user.email}).select('_id')
                    .then(data=>{
                        var id=data._id
                        jwt.sign({id},s_key,{ expiresIn:'2 days' },(err,token)=>{
                            if (!err) {
                                res.cookie(token) 
                                res.send('signup sucessfuly')
                            }
                            else{
                                res.sendStatus(403)
                            }
                        })
                    }).catch(err=>{
                        res.send(err.message)
                    })
                }
            })
        }
    })
})