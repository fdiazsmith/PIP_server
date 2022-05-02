// import dependencies for the app
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// set up a entry route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// set up a route that can take parameters
app.get('/:id', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
// set up a route that can take a wild card endpoint
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});