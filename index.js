const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    Recipe.deleteOne({ title: "Carrot Cake" })
      .then(successCallback)
      .catch(errorCallback);
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function successCallback() {
  console.log("Succes boi!");
  mongoose.connection.close();
}

function errorCallback() {
  console.log("Damn u suck!");
}
