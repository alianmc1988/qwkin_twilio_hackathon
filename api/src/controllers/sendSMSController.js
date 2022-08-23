const SendMessageService = require("../services/sendMessageService");

class SendSMSController {
  static async sendSMS(req, res, next) {
    const { data } = req.body;
    const message = await SendMessageService.sendSMS({ data });
    req.message = message;
    next();
  }
}

module.exports = SendSMSController;
