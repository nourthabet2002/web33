const mongoose= require('mongoose')
const taskschema = require('./tasks.js')
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
       default:Date.now(),
    },
    // tasks:{
    //     type:[taskschema]
    // },
    
    
        
    
},
{collection :"persons"}
);
const personsmodel =mongoose.model("person",personschema)
module.exports=personsmodel;