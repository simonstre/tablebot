require( 'dotenv' ).config();

if ( !process.env.SLACK_API_TOKEN ) {
    console.log( 'Error: Specify the SLACK_API_TOKEN environment variable.' );
    process.exit( 1 );
}

if ( !process.env.POSTGRES_URL ) {
    console.log( 'Error: Specify the POSTGRES_URL environment variable.' );
    process.exit( 1 );
}

GLOBAL._ = require( 'lodash' );
GLOBAL.async = require( 'async' );
GLOBAL.i18n = require( "i18n" );

i18n.configure( {
    locales: ['en'],
    directory: __dirname + '/locales'
} );

require( './bot/bot' );

require( './web/web' );
