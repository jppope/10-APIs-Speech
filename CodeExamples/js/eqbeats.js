init();

function init(){

    mozillafirefoxpolyfill();
    googlechromepolyfills();
    operatpolyfills();
    internetexplorerpolyfills();
    applesafaripollyfills();

}






function mozillafirefoxpolyfill(){
	console.log('%c My Little Pony ', 'background: #ff0000; color: white');
}
function googlechromepolyfills(){
	console.log('%c Could be the greatest ', 'background: #ff7f00; color: white');
}
function operatpolyfills(){
	console.log('%c Show of all time', 'background: #ffff00; color: white');
}



// example code that no one wants to sort through

function internetexplorerpolyfill(){

var Downer=function(){function e(e,n){var t=document.createElement("a"),o=document.createEvent("HTMLEvents"),c="data:"===n.slice(0,5),a=n.lastIndexOf(".")>-1;o.initEvent("click",!1,!1),t.download=e,t.href=a||c?n:URL.createObjectURL(new Blob([n])),t.dispatchEvent(o)}function n(e,n,t){var o="data:image"===n.slice(0,10),c=document.createElement("iframe");c.style.display="none",c.src=n,document.body.appendChild(c),o&&c.contentWindow.document.write("<img src='"+n+"' />"),t?(c.contentWindow.document.execCommand("SaveAs",!1,e),document.body.removeChild(c)):setTimeout(function(){c.contentWindow.document.execCommand("SaveAs",!1,e),document.body.removeChild(c)},0)}function t(e){return e.lastIndexOf("/")>-1?e.slice(e.lastIndexOf("/")+1):e}var o=!/Trident|MSIE/.test(navigator.userAgent);return function(c){var a=o?e:n;if(c instanceof Array)for(var i=0,d=c.length;d>i;i++)a(t(c[i]),c[i],!0);else if("string"==typeof c)a(t(c),c);else for(var r in c)a(r,c[r])}}();

}

function applesafaripollyfills(){
  console.log('%c ... of ALL TIME ', 'background: #222; color: white');
}

function ieEightFixes(){
	//silence is golden
}




















































function internetexplorerpolyfills(){
		getPolyfills();
		ieEightFixes();
}


// url to get data from: https://eqbeats.org/tracks/latest/json


//note: explain dot notation with good


//actual code

function getPolyfills(){

	$.getJSON('https://eqbeats.org/tracks/latest/json', function(data) {

		$('.result').html('<p>' + data[0].stream.mp3 + '</p>');
		console.log('%c ... of ALL TIME ', 'background: #ffff00; color: black');
		setTimeout(newAudio(data[0].stream.mp3), 6000);

		console.log('%c ... of ALL TIME ', 'background: #0000ff; color: white');

	});
}







function newAudio(song) {
    var new_audio = song;
    var source = '<audio id="audio_player">';
    source +=  '<source id="audio_player_ogv" src="' + new_audio + ' type="audio/mpeg" />';
    source +=  '</audio>';
    $('#divAudio_Player').html(source);
    var aud = $('#audio_player').get(0);
    aud.play();
}

