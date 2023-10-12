const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const personsmodel = require('./models/person');

const PORT = process.env.PORT || 3005;

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
          position:"jjjjj",
          joinedDate:"02/10/2023"
  }); var response = await newperson.save();
  
      res.json(response);
   
  })
  app.delete('/persons/:id', async (req, res) => {
    console.log(req.params);
        const id  = req.params.id;
    console.log(" id to be deleted ============",id);
      
        try {
          
          const deletedperson = await personsmodel.findByIdAndRemove(id);
      
          if (!deletedperson) {
            return res.status(404).json({ message: 'person not found' });
          }
      
          res.json({ message: 'person deleted' });
        } catch (err) {
          
          res.status(500).json({ message: err.message });
        }
      });
      app.get('/persons', async (req, res) => {
        try {
          const person = await personsmodel.find();
          res.json(person);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      });
      app.post('/persons', async (req,res)  =>{
           
        let newperson = personsmodel({
          name:"mariam",
          salary:2000,
          position:"hhh",
          joinedDate:"08/10/2023"
  }); var response = await newperson.save();
        res.json(response);
      }) 
      