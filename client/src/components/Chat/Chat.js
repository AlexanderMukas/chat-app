import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import "./Chat.css";






const Chat = ( { location } ) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    useEffect( () => {
    //    const data = queryString.parse(location.search);
    //    console.log(data);                  // Object { name: "Alexander", room: "room1" }
    //    console.log(location.search);       // ?name=Alexander&room=room1
        const {name, room} = queryString.parse(location.search);
        //assign data 
        setName(name);
        setRoom(room);

    });


    return (
        <>
            <h1>This is Chat</h1>
            <h2>User: {name} , Room: {room}</h2>
        </>
    );
};


export default Chat;