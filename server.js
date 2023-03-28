const http = require('http');
const app = require('./app');
const {db} = require('./db')

const port = 6000 ;

const server = http.createServer(app);

server.listen(port);