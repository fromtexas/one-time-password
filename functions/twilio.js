const twilio = require('twilio');

const accountSid = 'AC299cfd52473dd22329bd519dc9f3f2e6';
const authToken = '0e6ebb52fdde3d967f599169efc34c62';

module.exports = new twilio.Twilio(accountSid, authToken);
