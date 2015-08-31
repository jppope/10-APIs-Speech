/**
*	A My little Pony Bomb
*	@jppope
*/


init();

/**
*	Init Function
*
*/

function init(){
	//getPolyfills();
}


// url to get data from: https://eqbeats.org/tracks/latest/json

function getPolyfills(){

    $.getJSON('https://eqbeats.org/tracks/latest/json', function(data) {

    //sticks the results to a div in the index file
        $('.result').html('<p>' + data[0].stream.mp3 + '</p>');

        //Setting a timeout for 2 reasons=> 1) to let the data load (simple way) 2) to make the bomb funnier
        setTimeout(newAudio(data[0].stream.mp3), 6000);

    });
}



// input a song url into the function newAudio
function newAudio(song) {

    var source = '<audio id="audio_player">';
    source +=  '<source id="audio_player_ogv" src="' + song + ' type="audio/mpeg" />';
    source +=  '</audio>';


    // add the new audio tag to the tag: #divAudio_Player
    $('#divAudio_Player').html(source);
    var aud = $('#audio_player').get(0);
    aud.play();

}








