var request = require('request')

function getPOTD(params) {
    var str = (params && params.text) ? params.text : 'Hello World';
    
    return new Promise(function(resolve, reject) {
        request('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo', function (error, response, body) {
            if(error) {
                reject({err: error});
            }            
            resolve(body);
        });
    })
}

global.main = getPOTD;