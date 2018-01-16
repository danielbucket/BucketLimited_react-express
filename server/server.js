const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router");

const env = process.env.NODE_ENV || 'development';
const config = require("../knexfile")[env];
const db = require('knex')(config);

app.set("port", process.env.PORT || 2222);


app.listen(app.get('port'), () => {
	console.log(`app is evesdropping in on port: ${app.get('port')}` )
})

module.exports = app;

