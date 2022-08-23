const permissionsLevel = {
  GUARD: 20,
  ADMIN: 1,
  USER: 50,
};

const messageStatus = {
  PENDING: 0,
  SENDED: 1,
  REJECTED: 2,
};

const messageTypes = {
  SMS: 0,
  WTSPP: 1,
  EMAIL: 2,
  MESSENGER: 3,
};

module.exports = {
  permissionsLevel,
  messageStatus,
  messageTypes,
};
