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

// SAMPLE CODE FROM SAMPLE slackbot

// Intro

controller.hears(['hello', 'hi', 'yo', 'sup', 'hey'], 'direct_message,direct_mention,mention', function (bot, message) {
  controller.storage.users.get(message.user, function (err, user) {
    if (user && user.name) {
      bot.reply(message, "Oh, hey. How's it goin' " + user.name + "?");
    } else {
      bot.reply(message, "Hey, I'm SimpleBot, what's your name, g?");
    }
  });
});