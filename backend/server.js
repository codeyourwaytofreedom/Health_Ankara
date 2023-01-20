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
  
  socket.on('customer-asking', (question) => {
    let ids = [];
    active_users.map(u => ids.push(u.user_id))
    if(!ids.includes(socket.id))
    {
      active_users.push({user_id:socket.id, user_messages:[{q:question}]})
    }
    else{
      let ids = [];
      active_users.map(u => ids.push(u.user_id))
      let index = ids.indexOf(socket.id)
      active_users[index].user_messages.push({q:question})
    }
    io.emit("active-users", active_users)    
  })

  socket.on('disconnect', () => {
    let ids = [];
    active_users.map(u => ids.push(u.user_id))

    if(ids.includes(socket.id))
    {
      let index = ids.indexOf(socket.id)
      active_users.splice(index,1)
      io.emit("active-users", active_users)
    }


  })
  socket.on('answer', (answer) => {
    let ids = []
    active_users.map(u => ids.push(u.user_id));
    let index = ids.indexOf(answer.to);
    active_users[index].user_messages.push({a:answer.text})
    io.emit('active-users', active_users)
    io.to(answer.to).emit('desk-response', answer.text)
  })
});

server.listen(9000, () => {
  console.log('listening on 9000');
});



