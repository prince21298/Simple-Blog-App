module.exports=(logout)=>{
    // logout.get('/logout',(req,res)=>{
    //     req.session.destroy(function(err){  
    //         if(err){  
    //             console.log(err); 
    //             Response.errorResponse(err.message,res); 
    //         }  
    //         else  
    //         {  
    //             Response.successResponse('User logged out successfully!',res,{}); 
    //         }  
    //     });
    // })

    logout.get('/logout',(req,res)=>{
        var cookie=req.headers.cookie
        res.send(cookie)
        
    })
}