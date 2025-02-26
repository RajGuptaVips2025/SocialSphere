// utils/googleConfig.js
require('dotenv').config();
const { google } = require('googleapis');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// 'postmessage' is used if you are exchanging the code on the server side.
// Otherwise, if you are using a redirect URI, change this value accordingly.
const oauth2client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'postmessage'
);

module.exports = { oauth2client };
