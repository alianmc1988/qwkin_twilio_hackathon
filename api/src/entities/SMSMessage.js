const BaseMessageEntity = require("./BaseMessageEntity");
const { messageStatus, messageTypes } = require("../constants");

class SMSMessage extends BaseMessageEntity {
  constructor({ recipientName, sentToNumber, messageBody, sender, unitId }) {
    super({ messageBody, sender, recipientName, unitId });
    this.sentToNumber = sentToNumber;
    this.type = messageTypes.SMS;
  }
}

module.exports = SMSMessage;
