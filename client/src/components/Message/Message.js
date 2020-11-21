import React from 'react';

import './Message.css';

//add emoji in chat
import ReactEmoji from 'react-emoji';

const Message = ({ message: {user , text}, name }) => {
    const d = new Date();
    const time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    // console.log(time);

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                // true
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}-{time}</p>
                    <div className="messageBox backgroundBlue">

                        {/* <p className="messageText colorWhite">{text}</p> */}

                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>

                    </div>

                </div>
            )
            : (
                // false
                <div className="messageContainer justifyStart">
                    
                    <div className="messageBox backgroundLight">
                        {/* <p className="messageText colorDark">{text}</p> */}
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    
                    <p className="sentText pl-10">{time}-{user}</p>

                </div>
            )
    )

}



export default Message;