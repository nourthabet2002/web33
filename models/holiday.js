const mongoose= require('mongoose')
const holidayschema = require('./holiday.js')
const holidayschema =mongoose.Schema({
    
    FirstName:{
        type:String,
        require:true
    },
    LastName:{
        type:string,
        require:true,
        
    },
    position:{
        type:String,
        

    },
    
    numberofdays:{
        type:number,
        require:true,
    },
    
    
        
    
},
{collection :"persons"}
);
const holidaymodel =mongoose.model("holiday",holidayschema)
module.exports=holidaymodel;