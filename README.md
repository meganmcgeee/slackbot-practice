# Basic Bot Boilerplate

This is a boilerplate for a bot using [Botkit](https://github.com/howdyai/botkit) and configured with [Babel](https://babeljs.io), [ESLint](http://eslint.org), [Flow](http://flowtype.org/), and [JSCS](http://jscs.info).

To get started, follow the instructions on the [Botkit](https://github.com/howdyai/botkit) documentation and get yourself a Slack token for your bot.

Once you have your token, add it to a file called `secret.json` in the project root. For security reasons, this file should not be committed to your repository.

When finished, your `secret.json` file should look like this, with your actual token in place of `"YOUR_TOKEN_HERE"`:

```
{
  "slackToken": "YOUR_TOKEN_HERE"
}
```

With your token set up, you should now do

```
npm install
```

to install the dependencies.

Source files are in the `src` directory and are compiled to the `lib` directory. To watch for changes and auto-compile on save, run

```
npm run watch
```

To build the project without watching, do

```
npm run build
```

Finally, you can start the bot with

```
npm start
```

Assuming you did the above steps correctly, your bot should now be on Slack!

Have fun!
