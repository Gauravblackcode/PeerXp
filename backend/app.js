const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mark:baba2301@cluster0-tepxu.mongodb.net/meanStack?retryWrites=true&w=majority", { useNewUrlParser: true , useUnifiedTopology: true })
.then(() => {
  console.log("connected to the database");
})
.catch(() => {
  console.log("conecstion failed with database");
});

// to conect the different pots or to in another word to conecxt the client side and server ports we user this middeleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

  next();
});

// for body parser
app.use(bodyParser.json());
// posting data
app.post('/api/posts', (req, res, next) => {
  console.log(req.body.email);
  const mypost = ({
    email: req.body.email,
    message: req.body.message,
    phone: req.body.phone,
    organization: req.body.organization,
    check: req.body.check,
  });
  mypost.save().then(createdPost => {
    res.status(201).json({
      message: "Post added sucessfully",
    });
  })
  console.log(mypost)

});

module.exports = app;
