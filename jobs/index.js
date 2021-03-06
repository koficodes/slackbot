'use strict'


const greetingCommand = require('./greeting');
const getMotivationalMessage = require('./getMotivationalMessage');
const config = require('../config');


module.exports = (scheduler, bot) => {
  const goodMorningGreetingCommand = greetingCommand(config.GENERAL_ID, bot);
  const getMotivationalMessageCommand = getMotivationalMessage(config.GENERAL_ID, bot);
  const goodNightGreetingCommand = greetingCommand(config.GENERAL_ID, bot, `Good night ${config.APP_NAME}`);
  const getAstronomyPictureOfTheDayCommand = require('./get_astronomy_picture_of_the_day')(config.RANDOM_ID, bot);

  scheduler.scheduleJob('30 9 * * *', goodMorningGreetingCommand);
  scheduler.scheduleJob('31 9 * * *', getMotivationalMessageCommand);
  scheduler.scheduleJob('30 23 * * *', goodNightGreetingCommand);
  scheduler.scheduleJob('0 13 * * *', getAstronomyPictureOfTheDayCommand);
}
