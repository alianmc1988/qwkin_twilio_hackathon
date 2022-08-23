const BaseEntity = require("./BaseEntity");
const { messageStatus, messageTypes } = require("../constants");

class BaseMessageEntity extends BaseEntity {
  constructor({ messageBody, sender, recipientName, unitId }) {
    super();
    this.messageBody = messageBody;
    this.sender = sender;
    this.recipientName = recipientName;
    this.unitId = unitId;
    this.status = messageStatus.PENDING;
    this.sentAt = new Date(Date.now());
    this.type = messageTypes.SMS;
  }
}

module.exports = BaseMessageEntity;
