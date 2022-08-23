const router = require("express").Router();
<<<<<<< HEAD
const EventController = require("../../controllers/eventController");

router.post("/checkin", EventController.create, (req, res) => {
  res.status(200).json(req.body);
});
=======
>>>>>>> e37efcf6bfe2645f52f73092de2f260a8ad1dfba

module.exports = router;
