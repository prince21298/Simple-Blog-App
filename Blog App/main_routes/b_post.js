module.exports=(post,post_data,jwt,s_key,datetime,signup_user)=>{
    post.post('/postblog',(req,res)=>{
        var dt = datetime.create();
        var date_format = dt.format('d/m/Y');
        var body=req.body
        var cookie=req.headers.cookie.split(' ')
        var n_cookie=cookie[cookie.length-1].slice(0,-10)
        jwt.verify(n_cookie,s_key,(err,data)=>{
            if(!err){
                var id=data.id
                signup_user.findOne({"_id":id})
                .then(data=>{
                    var data1=data
                    var post_blog=new post_data({
                        user_id:id,
                        name:data1.name,
                        email:data1.email,
                        subject:body.subject,
                        message:body.message,
                        date:date_format
                    })
                    post_blog.save(function(err,data){
                        if(!err){
                            res.send('Uploded sucessfully...   ')
                        }
                        else{
                            res.send(err.message)
                        }
                    })

                })
            }
        })
    })
}




