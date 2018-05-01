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
     { method: 'flickr.photos.getRecent',
       api_key: '74e129101391605385516cd7ef1ad85c',
       format: 'json',
       nojsoncallback: '1',
       api_sig: '15db354672f19943657a409926f2b9ac' },
       extras: 'description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o',
       page: '1',
    json: true

  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(JSON.stringify(body, undefined, 2));
    res.locals.rawData = body
    next();

  });


}

app.get('/api/pics', getPics, (req, res, next) => {
  res.send({ data: res.locals.rawData });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
