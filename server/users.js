// create helper functions: addUser, removeUser, getUser, getUsersInRoom

// const e = require("express");

const users = [];

const addUser = ( {id, name, room}) => {
    // If name have 2 words : Alexander Mukas =alexandermukas
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    // check if user exist
    const existingUser = users.find( user => user.room === room && user.name === name); // false - not find user
    if(existingUser) {
        return { error : 'Username is taken'};
    };
    
    const user = { id, name, room};

    // add new User
    users.push(user);
    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex( user => user.id === id); // find index from ID
    if(index !== -1){
        return users.splice(index, 1)[0]
    } 
}


const getUser = ( id ) => users.find( user => user.id === id);

const getUsersInRoom = ( room ) => users.filter( user => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom};
//1:00:20 in video