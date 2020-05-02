var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Blog_data',{ useUnifiedTopology: true, useNewUrlParser: true, });
var db = mongoose.connection;
if (!db){
    console.log("error in Db creating");
    
}
var userSchema = mongoose.Schema({
    name:{type:String,require:true,index:true},
    email:{type:String,require:true,unique:true,index:true},
    password:{type:String,require:true,unique:true,trim: true,minlength: 5}
},{
    timestamps: true,
    collection: 'user_signup'
})


var user_data=mongoose.model('user_data', userSchema,'user_signup')


module.exports=user_data