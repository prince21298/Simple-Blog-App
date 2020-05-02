module.exports=((login,signup_user,jwt,s_key)=>{
    login.post('/signin',(req,res)=>{
        var body=req.body
        signup_user.findOne({email:body.email,password:body.password}).select('_id')
        .then(data=>{
            var id=data._id
            jwt.sign({id},s_key,{ expiresIn:'2 days' },(err,token)=>{
                if (!err) {
                    res.cookie(token) 
                    res.send('signin sucessfuly')
                }
                else{
                    res.sendStatus(403)
                }
            })
        })
        .catch(err=>{
            res.send('your password or email is wrong please correct it...')
        })
    })
})