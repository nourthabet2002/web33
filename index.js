const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const personsmodel = require('./models/person');

const PORT = process.env.PORT || 3000;

const app = express();
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("connected to db");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

}
)


// app.use(express.json());
// app.use('/workers',use(personrouter) 
  
  
  
  
// );
// app.get('/tasks',use(tasskrouter) 
  
  
  
  
//  );
//  
app.post("/add",async(req,res)=>{
    
    
  //     try{var response = await personmodel.find({name : "%sa%"})
  //     res.json(response);
  // }catch (error){
  //     console.log()
  // }
      let newperson = personsmodel({
          name:"nour",
          salary:2000,
          position:jjjjj,
          joinedDate:"02/10/2023"
  }); var response = newperson.save();
  
      res.json(response);
   
  })