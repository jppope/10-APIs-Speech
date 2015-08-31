/**
 * Example of a Nodejs Script that gets the bars in a city
 * COPY AUTHOR LINE FROM OTHER FILE
 */

var http = require('http');
var parseString = require('xml2js').parseString;

//var city = "astoria";
//var city = "newport+beach";
//var city = "costa+mesa";
var city = "san+francisco";
var key = "";

//The url for the request
var options = {
    host: 'beermapping.com',
    path: '/webservice/loccity/'+ key + '/' + city
};

http.request(options, callback).end();

/**
 * Take response and log string stream
 * @method callback
 */
function callback(response) {
//var callback = function(response) {
    var str = '';
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
        str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
        //console.log(str);
        parseString(str, function (err, result) {

            console.log("-----------------------The list of Bars!------------------");
            //console.log(result.bmp_locations.location);
            var placeToDrink = result.bmp_locations.location;

            for(var i = 0; i < placeToDrink.length; i++){
                console.log(placeToDrink[i].name[0]);
                console.log(placeToDrink[i].overall[0]);
            }

            console.log("-----------------------The End of the list of Bars!------------------");

        });

    });
}

