const express = require("express"); // requires express
const router = express.Router(); // requires router
const Workout = require("../models/workout"); // requires model from workout.js

// get route for all the workouts in the database
router.get("/api/workouts", (req, res) => {
  // uses the model Workout varaible to find
  const entry = Workout.find()
    // promise of then with a  varavile that holds the data
    .then((data) => {
      console.log(entry); // logs data
      res.json(entry); // sends data being held as json in the api/workouts route
    })
    .catch((err) => {
      // sends a 400 error
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  const entry = Workout.create(body);
    console.log(entry)
    .then((entry) => {
      res.json(entry);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  const entry = Workout.find()
    .then((entry) => {
      res.json(entry);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.put("/api/workouts/:id", (req, res) => {
  const entry = Workout.updateOne(
    { id: req.params.id },
    { $push: { exercises: req.body } },
    (err, entry) => {
      if (err) {
        console.log(err);
      } else {
        console.log(entry);
        res.json(entry);
        console.log(entry);
      }
    }
  );
});

module.exports = router;
