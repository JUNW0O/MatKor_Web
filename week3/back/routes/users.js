var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", (req, res, next) => {
  const { id, pw, phone } = req.body;
  const pwHash = bcrypt.hashSync(pw, 10);
  fs.writeFileSync(
    `./noupload/${id}.json`,
    JSON.stringify({ id, pwHash, phone })
  );
});

module.exports = router;
