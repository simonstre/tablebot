$( document ).ready( function () {

    $( '#time' ).timepicker( {step: 15, timeFormat: 'H:i'} );

    $( "#twoplayersgames" ).selectize( {
        persist: false, createOnBlur: true, create: true
    } );

    $( "#threeplayersgames" ).selectize( {
        persist: false, createOnBlur: true, create: true
    } );

    $( "#fourplayersgames" ).selectize( {
        persist: false, createOnBlur: true, create: true
    } );

    $( "#fiveplayersgames" ).selectize( {
        persist: false, createOnBlur: true, create: true
    } );

    $( "#sixplayersgames" ).selectize( {
        persist: false, createOnBlur: true, create: true
    } );

    $( "#sevenplayersgames" ).selectize( {
        persist: false, createOnBlur: true, create: true
    } );

} );