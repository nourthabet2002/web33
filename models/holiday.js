const mongoose= require('mongoose')

const holidayschema =mongoose.Schema({

    personId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'person'

    }
    ,
    
 
    numberofdays:{
        type:Number,
        require:true,
    },
    
    
        
    
},
{collection :"holidays"}
);
const holidaymodel =mongoose.model("holiday",holidayschema)
module.exports=holidaymodel;