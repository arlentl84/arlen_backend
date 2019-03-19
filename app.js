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
    console.log(`El servidor esta corriendo por el puerto: ${config.development.server.port}`);
})

module.exports = server;