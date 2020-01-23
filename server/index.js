const app = require('express')();
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Application is working fine');
});

app.get('/getChartData', (req, res) => {
   res.json({areaChartData, barChartData, pieChartData, donutChartData });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);


const areaChartData = [
    ['Year', 'Sales', 'Expenses'],
    ['2013',  1000,      400],
    ['2014',  1170,      460],
    ['2015',  660,       1120],
    ['2016',  1030,      540]
];

const barChartData = [
    ["Day", "Sale", { role: "style" } ],
    ["Monday", 90, "#b87333"],
    ["Tuesday", 77, "silver"],
    ["Wednesday", 88, "gold"],
    ["Thursday", 97, "color: #e5e4e2"]
];

const pieChartData = [
    ['Items', 'Sold this week'],
    ['T-shirt',     11],
    ['Shoes',      2],
    ['Radio',  2],
    ['TV', 2],
    ['Headphones',    7]
];

const donutChartData = [
    ['Items', 'User views'],
    ['T-shirt',     23],
    ['Shoes',      40],
    ['Radio',  13],
    ['TV', 39],
    ['Headphones',    60]
];