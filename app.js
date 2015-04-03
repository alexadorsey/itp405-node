var express = require('express');
var ejs = require('ejs');
var Dvd = require('./models/Dvd');
var app = express();
app.set('view engine', 'ejs');


// Routes
app.get('/', function(req, res) {
    res.render('index', {
        site_title: 'Home'
    });
});

app.get('/dvds', function(req, res) {
    Dvd.findAll({
        where: {
            title: { like: '%' + req.query.title + '%' },
            award: req.query.award,
        }
    }).then(function(results) {
        res.render('dvds', {
            site_title: 'Results',
            title: req.query.title,
            award: capitalizeFirstLetter(req.query.award),
            dvds: results
        });
    });
});


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


app.listen(3000, function() {
    console.log('Listening on localhost:3000');
})