var express = require('express');
var cors = require('cors');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

var getPics = function (req, res, next) {

  var options = {
    method: 'GET',
    url: 'https://api.flickr.com/services/rest/',
    qs:
      {
        method: 'flickr.photos.search',
        api_key: '154aed70282e29c9a05e3e7785a17a57',
        tags: 'comics',
        format: 'json',
        nojsoncallback: '1',
        auth_token: '72157695595912864-d4147975851767d4',
        api_sig: 'c07da0ce589d13fdff6cd3d5172f3471'
      },
    json: true

  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(JSON.stringify(body, undefined, 2));
    res.locals.rawData = JSON.stringify(body)
    next();

  });


}

app.get('/api/hello', getPics, (req, res, next) => {
  res.json({ express: res.locals.rawData });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
