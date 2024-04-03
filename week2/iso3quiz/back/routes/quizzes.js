var express = require("express");
var router = express.Router();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/quiz", function (req, res, next) {
  const countries = require("../../../data/countries.json");
  const index = getRandomInt(0, countries.length + 1);
  const quiz = countries[index];
  console.log(quiz);
  res.status(200).json({ country: quiz.name });
});

router.post("/answer", function (req, res, next) {
  const countries = require("../../../data/countries.json");
  const country = req.body.country;
  const guess = req.body.answer;
  const answer = countries.find(function (data) {
    return data.name === country;
  });
  if (answer === undefined) {
    res.status(401).send("Wrong Country Name");
  } else {
    res.status(200).json({
      "alpha-3": answer["alpha-3"],
      correct: answer["alpha-3"] === guess,
    });
  }
});

module.exports = router;
