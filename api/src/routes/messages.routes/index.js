const { Router } = require("express");
const SendSMSController = require("../../controllers/sendSMSController");
const router = Router();

router.get("/", SendSMSController.sendSMS, (req, res) => {
  res.status(200).json(req.message);
});
