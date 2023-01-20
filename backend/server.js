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
  
  socket.on('customer-asking', (question) => {
    if(!active_users.includes(socket.id))
    {
      active_users.push(socket.id)
    }
    io.emit("active-users", active_users)
    
  })

  socket.on('disconnect', () => {
    if(active_users.includes(socket.id))
    {
      const index = active_users.indexOf(socket.id)
      active_users.splice(index,1)
      io.emit("active-users", active_users)
    }


  })
  socket.on('answer', (answer) => {
    console.log(answer.to)
    io.to(answer.to).emit('desk-response', `this is desk response for ${answer.to}`)
  })
});

server.listen(9000, () => {
  console.log('listening on 9000');
});



