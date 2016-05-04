'use strict';

var _botkit = require('botkit');

var _botkit2 = _interopRequireDefault(_botkit);

var _secret = require('../secret.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = _botkit2.default.slackbot({
  // Uncomment the following line for debugging messages
  // debug: true,
});

var bot = controller.spawn({
  token: _secret.slackToken
});

bot.startRTM(function (err) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

// Simple Response

// Bot responds to a mention
var mentionAnswer = "You rang?";

controller.on('direct_mention', function (bot, message) {
  // reply to _message_ by using the _bot_ object
  bot.reply(message, mentionAnswer);
});