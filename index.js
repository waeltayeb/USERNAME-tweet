const express = require("express");
const engine = require("express-handlebars").engine;
const app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tweets'
});
connection.connect();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.get('/', (req, res) => {
    connection.query('SELECT * from statut  order by temp_statut DESC', function (error, results, fields) {

        if (error) throw error;

        res.render('home', {
            title: "home",
            tab: results

        });

    });
});

app.listen(3000);