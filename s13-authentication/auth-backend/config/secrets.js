module.exports = {
  jwtSecret: process.env.SECRET || 'this is a backup secret',
  twilioApiKey: process.env.TWILIO_API_KEY || 'key here'
};
