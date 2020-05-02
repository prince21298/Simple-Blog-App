module.exports=(get_blog,post_data,jwt,s_key)=>{

    //To get all blogs
    get_blog.get('/get_blog',(req,res)=>{
        post_data.find().select(['name','subject','message','date'])
        .then((data)=>{
            res.send(data)
        }).catch((err)=>{
            res.send(err.message)
        })
    })

    // to get blogs of one user
    get_blog.get('/myblog',(req,res)=>{
        var cookie=req.headers.cookie.split(' ')
        var n_cookie=cookie[cookie.length-1].slice(0,-10)
        jwt.verify(n_cookie,s_key,(err,data)=>{
            if (!err){
                var id =data.id
                post_data.find({"user_id":id}).select(['name','subject','message','date'])
                .then((data)=>{
                    res.send(data)
                }).catch((err)=>{
                    res.send(err.message)
                })
            }
        })
    })


    //get blog for partcular id
    get_blog.get('/blog/:id',(req,res)=>{
        var id=req.params.id
        post_data.find({"_id":id}).select(['name','subject','message','date'])
        .then((data)=>{
            res.send(data)
        }).catch((err)=>{
            res.send(err.message)
        })
    })

}