module.exports=(update,post_data,signup_user,jwt,s_key)=>{
    update.put('/update_user',(req,res)=>{
        var body=req.body
        var cookie=req.headers.cookie.split(' ')
        var n_cookie=cookie[cookie.length-1].slice(0,-10)
        jwt.verify(n_cookie,s_key,(err,data)=>{
            var id=data.id
            signup_user.findByIdAndUpdate(id,body)
            .then((data)=>{
                signup_user.find({'_id':id})
                .then(data=>{
                    res.send(data)
                }).catch(err=>{
                    res.send(err.message)
                })
            }).catch(err=>{
                res.send(err.message)
            })
        })
    })
    update.put('/update_blog/:id',(req,res)=>{
        var _id=req.params.id
        var body=req.body
        var cookie=req.headers.cookie.split(' ')
        var n_cookie=cookie[cookie.length-1].slice(0,-10)
        jwt.verify(n_cookie,s_key,(err,data)=>{
            var id=data.id
            post_data.find({"user_id":id,"_id":_id}).select(['_id'])
            .then(data=>{
                var id=data[0].id
                post_data.findByIdAndUpdate(id,body)
                .then((data)=>{
                    post_data.find({'_id':id})
                    .then(data=>{
                        res.send(data)
                    }).catch(err=>{
                        res.send(err.message)
                    })
                }).catch(err=>{
                    res.send(err.message)
                })
            }).catch(err=>{
                res.send(err.message)
            })
            
        })
    })
}


