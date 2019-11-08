const router = require("express").Router();
const db = require("../../models");

router.get("/all", function (req, res) {
    db.Quiz.find().then(function (data) {
        res.json(data);
    });
});

router.get("/id/:id", function (req, res) {
    db.Quiz.findById(req.params.id).then(function (data) {
        res.json(data);
    });
});

router.get("/title/:routeTitle", function (req, res) {
    db.Quiz.find({ routeTitle: req.params.routeTitle }).then(function (data) {
        res.json(data)
    });
});

router.post("/create", function (req, res) {
    db.Quiz.create({
        title: req.body.title,
        author: req.body.author,
        routeTitle: req.body.routeTitle,
        questions: req.body.questions
    })
    .then(function (data) {
        res.send({ msg: "Quiz Created Sucessfully" })
    })
    .catch(error => {
        return next(error);
    });
});

module.exports = router;