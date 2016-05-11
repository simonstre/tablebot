var Botkit = require( 'botkit' );

var controller = Botkit.slackbot( {
    debug: true
} );

var bot = controller.spawn( {
    token: process.env.SLACK_API_TOKEN
} ).startRTM();

module.exports.bot = bot;