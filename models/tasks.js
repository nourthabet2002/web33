const mongoose= require('mongoose')
const taskschema =mongoose.Schema({
    

    name :{
        type:String,
        require:true,
    },
    description:{
       type:String,
       require:true,
    },
    deadline:{
        type:Date,
        require:true
    },
   
    
        
    
},
{collection :"tasks"}
);
const tasksmodel =mongoose.model("tasks",taskschema)
module.exports=tasksmodel;