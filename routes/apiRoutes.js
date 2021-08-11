const express = require("express"); // requires express
const router = express.Router(); // requires router
const Workout = require("../models/workout"); // requires model from workout.js

// get route for all the workouts in the database for the most recent workout
router.get("/api/workouts", (req, res) => {
  // uses the model Workout varaible to find
  Workout.find()
    // promise of then with a  varavile that holds the data
    .then((data) => {
      res.json(data); // sends data being held as json in the api/workouts route
    })
    .catch((err) => {
      // sends a 400 error
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    // console.log(entry)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// router.get("/api/workouts/range", (req, res) => {
//   Workout.find({})

//   });

router.put("/api/workouts/:id", (req, res) => {
  Workout.updateOne({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
