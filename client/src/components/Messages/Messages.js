import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message/Message';
import './Messages.css';

//time of message
// const time = new Date().toLocaleTimeString();
// console.log(time);

const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        {messages.map(
            (message, index) => <div key={index}>
                <Message 
                    message={message}
                    name={name}
                />
            </div>
        )}
    </ScrollToBottom>
);



export default Messages;