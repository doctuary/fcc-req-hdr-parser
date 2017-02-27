var express = require('express');
var app = express();
var requestIp = require('request-ip');

app.enable('trust proxy');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {    
    var ipAddress = requestIp.getClientIp(req);
    var language = req.headers['accept-language'];
    language = language.split(',')[0];
    var operatingSystem = req.headers['user-agent'];
    var platform = operatingSystem.split('(')[1];
    platform = platform.split(')')[0];
    res.send({ip: ipAddress, lang: language, os: platform});
});
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});