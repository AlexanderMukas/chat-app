import React from 'react';

import './Input.css';

// message, setMessage, sendMessage - props from Chat component
const Input = ( {message, setMessage, sendMessage} ) => (
    <form className="form">
        <input
         className="input"
         type="text"
         placeholder="Type a message..."
         value = {message}
         onChange = { (event) => setMessage(event.target.value)}
         onKeyPress = { event => event.key === 'Enter' ? sendMessage(event) : null }
        />
        <button 
         className="sendButton"
         onClick={(event) => sendMessage(event)}
        >Send</button>

    </form>

)

export default Input;