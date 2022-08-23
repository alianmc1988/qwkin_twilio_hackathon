const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = require("../config");

const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const QWIKIN_NUMBER = "+12058561234";

class SendMessageService {
  constructor({ data }) {
    this.data = data;
  }
  static async sendSMS() {
    return client.messages.create({
      body: data.message,
      from: QWIKIN_NUMBER,
      to: data.recipientNumber,
    });
  }
}

module.exports = SendMessageService;
