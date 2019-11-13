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

router.post("/register", function(req, res){
    console.log(req.body);
    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(function(data) {
        res.json(data);
    });
});

router.post("/login", function(req, res){
    console.log("reg Info: ", req.body);
    db.User.findOne(req.body).then(function(data){
        res.json(data);
    });
});

module.exports = router;