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
    
    
        
    
},
{collection :"persons"}
);
const personsmodel =mongoose.model("person",personschema)
module.exports=personsmodel;