
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const MOBILE_OS_STATS = [ {
    // Source: http://gs.statcounter.com/os-market-share/mobile/worldwide
    name: 'Mobile OS',
    x: 'year',
    y: [ 'and', 'ios', 'win' ],
    ylabels: [ 'Android', 'iOS', 'Windows' ],
    data: [
        { 'year': 2014, 'and': 55.70, 'ios': 24.73, 'win': 2.32, 'others': 17.25 },
        { 'year': 2015, 'and': 66.77, 'ios': 18.14, 'win': 2.22, 'others': 12.87 },
        { 'year': 2016, 'and': 69.68, 'ios': 19.38, 'win': 1.63, 'others': 9.31 },
        { 'year': 2017, 'and': 73.52, 'ios': 19.37, 'win': 0.77, 'others': 6.34 }
    ]
}];

function rand (limit) {
    return Math.ceil(Math.random() * limit);
}

function processRandomQuery(req, res) {
    const data = [];
    const years = [];
    const series = [];
    const labels = [];

    for (let i = 0; i < rand(4) + 1; i++) {
        series.push(String.fromCharCode(i + 97))
        labels.push('Serie ' + String.fromCharCode(i + 65))
    }

    const nbYears = rand(4) + 2

    for (let i = 0; i < nbYears; i++) {
        let year = 0;
        do {
          year = rand(17) + 2000;
        }
        while (years.includes(year));

        years.push(year);

        const yearStat = { year: '' + year };

        for (let serie in series) {
            yearStat[series[serie]] = rand(100);
        }
        
        data.push(yearStat);
    }
    
    const stats = {
        name: 'Stats about something',
        series: series,
        labels: labels,
        key: 'year',
        data: data
    };

    res.send(stats);
}

app.get('/api/stats/os/mobile', function (req, res) {
    res.send(MOBILE_OS_STATS);
});

app.post('/api/stats/random', processRandomQuery);

app.get('/api/stats/random', processRandomQuery);



app.listen(3000, function () {
  console.log('API server listening on port 3000!')
});
