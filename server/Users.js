// create helper functions: addUser, removeUser, getUser, getUsersInRoom

const e = require("express");

const users = [];

const addUser = ( {id, name, room}) => {
    // If name have 2 words : Alexander Mukas =alexandermukas
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    // check if user exist
    const existingUser = users.find( user => user.room === room && user.name === name);
    if(existingUser) {
        return { error : 'Username is taken'};
    };
    
    const user = { id, name, room};

    // add new User
    users.push(user);
    return { user };
}

const removeUser = ( id ) => {
    const index = users.findIndex( user => user.id === id); // find index from ID
    if(index !== -1){
        return users.slice(index, 1)[0]
    } 
}


const getUser = ( {name} ) => {

}

const getUsersInRoom = ( {room} ) => {

}