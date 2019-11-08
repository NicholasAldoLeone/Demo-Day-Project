const mongoose = require("mongoose");
const Schema = mongoose.Schema

const quizSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    routeTitle: {
        type: String,
        required: true
    },

    questions: []
})

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;