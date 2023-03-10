const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

app.use(cors({ origin: true, credentials: true }));

io.on('connection', (socket) => {
  console.log('a user connected');

  // on message
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', "I am happy to help you. how can I help?");
  });
});

server.listen(9000, () => {
  console.log('listening on 9000');
});