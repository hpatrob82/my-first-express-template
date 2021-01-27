'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);

})

const rootController = require('./routes/index');
const friendsController = require('./routes/friends');


app.use('/', rootController);
app.use('/friends', friendsController);