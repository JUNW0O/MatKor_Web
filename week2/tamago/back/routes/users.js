var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/:cnt", function (req, res, next) {
  const cnt = req.params.cnt;
  const maxcnt = parseInt(req.body.maxcnt);
  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "darkblue",
    "purple",
  ];

  if (cnt == 0) {
    res.status(304).send("Game finished");
  } else if (cnt <= maxcnt) {
    const new_cnt = cnt - 1;
    const new_color = color[Math.floor(((maxcnt - new_cnt) / maxcnt) * 7)];
    res.status(200).json({ cnt: new_cnt, color: new_color, fin: new_cnt == 0 });
  } else {
    res.status(401).send("Invalid count detected");
  }
});

module.exports = router;
