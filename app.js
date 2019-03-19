const express = require('express');
const http = require('http');

let app = express();
let server = http.Server(app);
let debug = require('debug')('http');

const configExpress = require('./lib/express');
const configRoutes = require('./routes/routes');
const configErrors = require('./lib/errors');
const Db = require('./lib/Db/Db');


global.config = require('./config.json');

configExpress(app);
configRoutes(app);
configErrors(app);
Db.Initialize().then(()=>{
    console.log('All Ok');
})

// configDatabase(mongoose => {
//
//
// })
// ;
app.listen(3000);
module.exports = server;