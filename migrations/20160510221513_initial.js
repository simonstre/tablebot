exports.up = function ( knex, promise ) {
    return promise.all( [knex.schema.createTable( 'configuration', function ( t ) {
        t.increments();
        t.time( 'time' ).notNullable();
        t.specificType( 'twoplayersgames', 'VARCHAR[]' ).notNullable();
        t.specificType( 'threeplayersgames', 'VARCHAR[]' ).notNullable();
        t.specificType( 'fourplayersgames', 'VARCHAR[]' ).notNullable();
        t.specificType( 'fiveplayersgames', 'VARCHAR[]' ).notNullable();
        t.specificType( 'sixplayersgames', 'VARCHAR[]' ).notNullable();
        t.specificType( 'sevenplayersgames', 'VARCHAR[]' ).notNullable();
        t.integer( 'answerdelaymin' ).notNullable();
    } ), knex( 'configuration' ).insert( {
        time: '11:45:00',
        twoplayersgames: '{}',
        threeplayersgames: '{}',
        fourplayersgames: '{}',
        fiveplayersgames: '{}',
        sixplayersgames: '{}',
        sevenplayersgames: '{}',
        answerdelaymin: '15'
    } ),
     knex.schema.createTable( 'games', function ( t ) {
        t.increments();
        t.integer( 'players' ).defaultTo( '0' ).notNullable();
        t.timestamp( 'date' ).defaultTo( knex.raw('now()') ).notNullable();
        t.text( 'messageid' ).notNullable();
        t.text( 'channelid' ).notNullable();
    } )] );
};

exports.down = function ( knex, promise ) {
    return promise.all( [knex.schema.dropTable( 'configuration' ), knex.schema.dropTable( 'games' )] );
};