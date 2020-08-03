const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');

// Creating a standard Node.js server
const httpServer = require('http').createServer((req, res) => {
  // serve the index.html file
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(content));
  res.end(content);
});

// Connecting socket.io to the Node.js server
const io = require('socket.io')(httpServer);

// Do something on connection
io.on('connect', socket => {
  console.log('connect');
});

// Listening to port 3000
httpServer.listen(3000, () => {
  console.log('go to http://localhost:3000');
});
