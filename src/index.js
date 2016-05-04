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
