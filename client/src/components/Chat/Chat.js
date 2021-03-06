import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import "./Chat.css";

// Components :
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";

let socket;

const Chat = ( { location } ) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    // add users for TextContainer
    const [users, setUsers] = useState([]);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000';

    useEffect( () => {
    //    const data = queryString.parse(location.search);
    //    console.log(data);                  // Object { name: "Alexander", room: "room1" }
    //    console.log(location.search);       // ?name=Alexander&room=room1
        const {name, room} = queryString.parse(location.search);
        

        socket = io(ENDPOINT);     // ENDPOINT, serverside

        //assign data 
        setName(name);
        setRoom(room);

        //// socket events
        // 1. join event
        // socket.emit('join', {name: name, room: room});
        socket.emit('join', {name, room}, ( ) => {
            // 1:08:48


        });

        return () => {
            socket.emit('disconect');
            socket.off();
        }

    }, [ENDPOINT, location.search]);

    // useEffect( () => {
    //     socket.on('message', (message) => {
    //         setMessages([...messages, message]);
    //     })
    // }, [messages]);

    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);

    // function for sending messages

    const sendMessage = (event) => {
        event.preventDefault(); // erase title of message in input

        if(message) {
            socket.emit( 'sendMessage', message, () => setMessage('') );
        }
    }
    console.log(message, messages);

    return (
        <div className="outerContainer">

            <div className="container" >
                <InfoBar room={room} />


                <Messages 
                 messages={messages}
                 name={name} 
                />

                <Input 
                 message={message}
                 setMessage={setMessage}
                 sendMessage={sendMessage}
                />

            </div>
            <TextContainer users={ users }/>

        </div>
    );
};


export default Chat;