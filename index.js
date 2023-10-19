const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const personsmodel = require("./models/person");
const bodyParser = require("body-parser");
const cors = require('cors')

const PORT = 3005;

const app = express();
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())


mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });

// app.use(express.json());
// app.use('/workers',use(personrouter)

// );
// app.get('/tasks',use(tasskrouter)

//  );
//
app.post("/add", async (req, res) => {
  //     try{var response = await personmodel.find({name : "%sa%"})
  //     res.json(response);
  // }catch (error){
  //     console.log()
  // }
  console.log(req.body);
  const { name, salary, position } = req.body;
  let newperson = personsmodel({
    name: name,
    salary: salary,
    position: position,
  });
  var response = await newperson.save();

  res.json(response);
});
app.delete("/persons/:id", async (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  console.log(" id to be deleted ============", id);

  try {
    const deletedperson = await personsmodel.findByIdAndRemove(id);

    if (!deletedperson) {
      return res.status(404).json({ message: "person not found" });
    }

    res.json({ message: "person deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/persons", async (req, res) => {
  try {
    const person = await personsmodel.find();
    res.json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// app.post("/persons", async (req, res) => {
//   let newperson = personsmodel({
//     name: "mariam",
//     salary: 2000,
//     position: "hhh",
//     joinedDate: "08/10/2023",
//   });
//   var response = await newperson.save();
//   res.json(response);
// });
app.post("/add", async (req, res) => {
  //     try{var response = await personmodel.find({name : "%sa%"})
  //     res.json(response);
  // }catch (error){
  //     console.log()
  // }
  console.log(req.body);
  const { name, descripition, deadline} = req.body;
  let newtask = tasksmodel({
    name: name,
    descripition: descripition,
    deadline: deadline,
  });
  var response = await newtask.save();

  res.json(response);
});
app.post("/add", async (req, res) => {
  //     try{var response = await personmodel.find({name : "%sa%"})
  //     res.json(response);
  // }catch (error){
  //     console.log()
  // }
  console.log(req.body);
  const { FirstName, LastName, position,numberofdays } = req.body;
  let newperson = personsmodel({
    FirstNamename: FirstName,
    LastName:LastName,
    position: position,
    numberofdays:numberofdays,

  });
  var response = await newholiday.save();

  res.json(response);
});

