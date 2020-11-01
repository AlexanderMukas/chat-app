const express = require('express');
const socketio = require('socket.io');
const http = require('http');

// 1:00:43

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');


const PORT = process.env.PORT || 5000;

const router = require('./router');


const app = express();

const server = http.createServer(app);
const io = socketio(server);

// socket.io code:
io.on('connection', (socket) => {
    console.log('We have a new connection!!!');
    // 1. join event
    socket.on('join', ( {name, room}, callback) => {
        console.log(name, room);      // Alexander room1 from client
        



        
    });


    socket.on('disconnect', () => {
        console.log('User had left!!!');
    })
});





app.use(router);

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});