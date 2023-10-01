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


app.use(express.json());
app.use('/workers',use(personrouter) 
  
  
  
  
);
app.get('/tasks',use(tasskrouter) 
  
  
  
  
);