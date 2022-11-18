const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = 8080;

const con = mysql.createConnection({
    host : '127.0.0.1',
    user : 'spo',
    password : 'spo',
    database : 'spodb'
})

con.connect(function (err) {
    if(err) throw err;
    console.log('DB Connected')
})


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`open server : ${PORT}`);
});