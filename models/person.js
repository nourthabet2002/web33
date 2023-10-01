const mongoose= require('mongoose')
const personschema =mongoose.Schema({
    
    name:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true,
        
    },
    position:{
        type:String,
        require:true,

    },
    joinedDate:{
       type:Date,
       require:true,
    },
    pesontasks:{
         type:[string],
    },
    
        
    
},
{collection :"persons"}
);
const personsmodel =mongoose.model("person",userschema)
module.exports=personsmodel;