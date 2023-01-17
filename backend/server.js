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

let active_users = [];

io.on('connection', (socket) => {
  //console.log('a user connected');
  //console.log(socket.id);
  
  // on message
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    //io.emit('chat message', msg); // --> to all users, including the sender
    socket.broadcast.emit('chat message', msg);  // --> to all users but the sender
  });

  socket.on('customer-asking', (question) => {
    console.log(socket.id)
    active_users.push(socket.id)
    console.log(active_users)
    io.emit('receive-question', question, socket.id)
  })
  socket.on('disconnect', () => {
    active_users = active_users.filter( user => user!==socket.id)
    console.log(socket.id, "this id disconnected")
    console.log(active_users)
  })
  socket.on('answer', (answer) => {
    console.log(answer, "arrived")
    io.to(answer.to).emit('answer', {to:answer.id, content:answer.content})
  })

});

server.listen(9000, () => {
  console.log('listening on 9000');
});



//could be useful
/*   socket.onAny((event, ...args) => {
    console.log(event, args);
  }); */