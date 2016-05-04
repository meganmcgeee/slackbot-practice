/* @flow */
import Botkit from 'botkit';
import { slackToken } from '../secret.json';

const controller: Object = Botkit.slackbot({
  // Uncomment the following line for debugging messages
  // debug: true,
});

const bot: Object = controller.spawn({
  token: slackToken,
});

bot.startRTM((err: Error) => {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

// Simple Response

// Bot responds to a mention
const mentionAnswer = "You rang?";

controller.on('direct_mention', function (bot, message) {
  // reply to _message_ by using the _bot_ object
  bot.reply(message, mentionAnswer);
});
