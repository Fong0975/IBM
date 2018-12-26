var port = process.env.VCAP_APP_PORT || 5000;

//Express Web Framework, and create a new express server
var express = require('express'),
app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use( express.static( "views/uploads" ) ); //設定路徑讓uploads中的相片可以在views/result.ejs存取



//Routes modules
var index = require('./routes');
var index_challenge = require('./routes/index_challenge');
var index_general = require('./routes/index_recognize');
var result_challenge = require('./routes/result_challenge');
var result_recognize = require('./routes/result_recognize');


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/index_challenge', index_challenge);
app.use('/index_recognize', index_general);
app.use('/result_challenge', result_challenge);
app.use('/result_recognize', result_recognize);



app.use('/assets', express.static('assets'));
app.use('/userPhoto', express.static('./views/uploads'));


// start server on the specified port and binding host
app.listen(port, function(req, res){
    console.log(`Server started on port` + port);
});
