const express = require("express");
const router = express.Router();
const quizRoutes = require("./quizzes.js");

router.use("/database", quizRoutes);

module.exports = router;