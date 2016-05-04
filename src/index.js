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

// SAMPLE CODE FROM SAMPLE slackbot

// Intro

controller.hears(['hello', 'hi', 'yo', 'sup', 'hey'], 'direct_message,direct_mention,mention',
function(bot, message) {
  controller.storage.users.get(message.user, (err, user) => {
    if (user && user.name) {
      bot.reply(message, "Oh, hey. How's it goin' " + user.name + "?");
    } else {
      bot.reply(message, "Hey, I'm SimpleBot, what's your name, g?");
    }
  });
});
