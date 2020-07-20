var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Blog_data',{ useUnifiedTopology: true, useNewUrlParser: true, });
var db = mongoose.connection;
if (!db){
    console.log("error in Db creating");
    
}
var post_schema=({
    user_id:{type:String,require:true},
    name:{type:String,require:true},
    email:{type:String,require:true},
    subject:{type:String,require:true},
    message:{type:String,require:true},
    date:{type:String,require:true}
})

var post_data=mongoose.model('post_data', post_schema,'post_blog')

module.exports=post_data
