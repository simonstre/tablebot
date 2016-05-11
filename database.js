var knex = require( 'knex' )( {
    client: 'pg', connection: process.env.POSTGRES_URL, searchPath: 'public', debug: true
} );

// function( err, configuration )
exports.getConfiguration = function ( cb ) {
    knex.select( '*' )
        .from( 'configuration' )
        .limit( 1 )
        .asCallback( function ( err, configurations ) {
            if ( err ) {
                return cb( err )
            }
            return cb( null, configurations[0] );
        } );
};

exports.updateConfiguration = function ( update, cb ) {
    module.exports.getConfiguration( function ( err, result ) {
        var configuration = require( 'util' )._extend( result, update );

        var toPg = function ( array ) {
            return '{' + array + '}';
        };

        knex( 'configuration' ).update( {
            time: configuration.time,
            answerdelaymin: configuration.answerdelaymin,
            twoplayersgames: toPg( configuration.twoplayersgames ),
            threeplayersgames: toPg( configuration.threeplayersgames ),
            fourplayersgames: toPg( configuration.fourplayersgames ),
            fiveplayersgames: toPg( configuration.fiveplayersgames ),
            sixplayersgames: toPg( configuration.sixplayersgames ),
            sevenplayersgames: toPg( configuration.sevenplayersgames )
        } ).asCallback( cb );
    } );
};

exports.createGame = function ( messageId, channel, cb ) {
    knex( 'games' ).insert( {
        messageid: messageId, //
        channelid: channel
    } ).asCallback( cb );
};

exports.getLatestGame = function ( channel, cb ) {
    knex.select( '*' )
        .from( 'games' )
        .where( 'channelid', '=', channel )
        .orderBy( 'date', 'desc' )
        .limit( 1 )
        .asCallback( function ( err, games ) {
            if ( err ) {
                return cb( err )
            }
            return cb( null, games[0] );
        } );
};

exports.updateGame = function ( id, players, cb ) {
    knex( 'games' )
        .where( 'id', '=', id )
        .update( {
            players: players
        } ).asCallback( cb );
};