import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';

const Messages = ({ messages }) => (
    <ScrollToBottom>
        {messages.map(
            (message, index) => <div key={index}>
                <Message />
            </div>
        )}
    </ScrollToBottom>
);



export default Messages;