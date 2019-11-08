const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/quiz_app_db"
);

const quizSeed = [
    {
      title: "Math Quiz",
      routeTitle: "mathquiz",
      author: "Jeffery Shoeshow",
    
      questions: [
        {
          text: "What is the sum of 1 + 1?",
          answers: [{"text": "A: 1"}, {"text": "B: 2", "isCorrect": true}, {"text": "C: 3"}, {"text": "D: 4"}],
        },
        {
          text: "What is the sum of 2 + 2?",
          answers: [{"text": "A: 8"}, {"text": "B: 7"}, {"text": "C: 4", "isCorrect": true},{"text": "D: 2"}],
        },
        {
          text: "What is the sum of 7 + 3?",
          answers: [{"text": "A: 10", "isCorrect": true}, {"text": "B: 5"}, {"text": "C: 8"}, {"text": "D: 3"}],
        }
      ]
    },
    {
      title: "Space Quiz",
      routeTitle: "spacequiz",
      author: "Mark Getmon",
      questions: [
        {
          text: "Which planet is the closes to the sun?",
          answers: [{"text": "A: Earth"}, {"text": "B: Mercury", "isCorrect": true}, {"text": "C: Mars"}, {"text": "D: Jupiter"}],
        },
        {
          text: "The Earth rotates around ____",
          answers: [{"text": "A: The Sun", "isCorrect": true }, {"text": "B: Earth"}, {"text": "C: Neptune"} , {"text": "D: Pluto"}],
        },
        {
          text: "The larget planet in our solar system is?",
          answers: [{"text": "A: Saturn"}, {"text": "B: Uranus"}, {"text": "C: Jupiter", "isCorrect" :true }, {"text": "D: Earth"}],
        }
      ]
    }
  ]
  db.Quiz
    .remove({})
    .then(() => db.Quiz.collection.insertMany(quizSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });

