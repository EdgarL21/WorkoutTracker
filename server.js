const express = require("express"); // requires express
const mongoose = require("mongoose"); // requires
const logger = require('morgan') // requires morgan

const PORT = process.env.PORT || 3000; // port

const app = express(); // changes varaible for when express

app.use(logger("dev")); // logs things to the console

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); // gives acces to public folder

// conncects ? look it up
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WorkoutTracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/htmlRoutes.js")); // requires the html routes
app.use(require("./routes/apiRoutes.js")); // requires the api routes

// listens to a port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
