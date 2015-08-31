/**
 * This script gets a random ron swanson quote and generates it on a website
 * @author Jon Pope jp@jp.com
 */

var quote = [];

init();

/**
 * Start this running
 * @method init
 */
function init() {
    getRonSwanson();
}

/**
 * Gets a ron swanson quote
 * @method getRonSWanson
 */
function getRonSwanson() {

    var request = new XMLHttpRequest();
    request.open('GET', 'http:////ron-swanson-quotes.herokuapp.com/quotes', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            data = JSON.parse(request.responseText);
            console.log(data);
            quote.push(data);
            $("#title").append(data.quote);
        } else {
            // We reached our target server, but it returned an error
            console.err('%3 error => Ron Swanson Quotes are not here','background:red;color:white')
        }
    };
    request.onerror = function() {
        // There was a connection error of some sort
    };
    request.send();

}






