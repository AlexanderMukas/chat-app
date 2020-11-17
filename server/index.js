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
    // 1. join event
    socket.on('join', ( {name, room}, callback) => {
        const { error, user} = addUser( { id: socket.id, name, room} );
        
        // if error
        if(error) return callback(error);
        
        socket.emit('message', {user: 'admin', text: `'${user.name}' - Welcome to the room - '${user.room}'` } );
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`});

        socket.join(user.room);
        
        //1:40:58
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) } );
        
        callback();
    });

    // 1:06:19
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });


    socket.on('disconnect', () => {
        // console.log('User has left!!!');
        // 1:39:17
        const user = removeUser(socket.id);
        // console.log(user);

        if(user) {
            io.to(user.room).emit('message', { user:'admin', text: `${user.name} has left.` })
        }
    });
});





app.use(router);

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});