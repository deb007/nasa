var request = require('request')

function getPOTD(params) {
    var str = (params && params.text) ? params.text : 'Hello World';
    
    return new Promise(function(resolve, reject) {
        request('https://api.nasa.gov/planetary/apod?api_key=KRpBIgwun3xR1eh7zIDkK4UOkfQy8K1hmZrKrdh9', function (error, response, body) {
            if(error) {
                reject({err: error});
            }       
                 
            resolve(JSON.parse(body));
        });
    })
}

global.main = getPOTD;