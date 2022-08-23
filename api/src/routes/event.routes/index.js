const router = require("express").Router();
const EventController = require("../../controllers/eventController");

router.post("/checkin", EventController.create, (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
