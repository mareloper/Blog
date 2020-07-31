const http = require('http');
const app = require('./app');
 

//declaring the port number
const port = process.env.port || 5500;

const server = http.createServer(app);

//starting the server
server.listen(port, '0.0.0.0');
console.log('Server listening on port ' + port);