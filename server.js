const http = require('http');
const add = require('./section2_')

/****** RUN CODE HERE ******/
function greet(name = ' <your name here>') {
  console.log('hello' + name)
}
greet('Gary');
/***************************/


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});