var bot = require( '../../slack' ).bot;
var database = require( '../../database' );

exports.getConfiguration = function ( req, res ) {
    bot.api.channels.list( {}, function ( err, response ) {
        var channels = response.channels.map( function ( channel ) {
            return channel.name
        } );

        database.getConfiguration( function ( err, configuration ) {
            res.render( 'configuration', {
                title: "Configuration", channels: channels, configuration: configuration
            } );
        } );
    } );
};

exports.postConfiguration = function ( req, res ) {
    database.updateConfiguration( req.body, function ( err, result ) {
        if ( err ) {
            console.error( err );
        }

        req.flash( 'success', {msg: 'Configuration saved.'} );

        res.redirect( '/configuration' );
    } );
};