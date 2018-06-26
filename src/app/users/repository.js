const mongoose = require( "mongoose" );

const User = mongoose.model( "User" );

const saveUser = ( data ) => {
    const user = new User( data );
    return user.save();
};

const editUser = ( user, data ) => {
    const { name, sex, age, type } = data;
    const currentUser = user;

    currentUser.name = name;
    currentUser.sex = sex;
    currentUser.age = age;
    currentUser.type = type;
    return user.save( );
};

const deleteUser = ( user ) => user.remove();

const findUser = ( value ) => User.find( {sub: value } );

module.exports = {
    saveUser,
    editUser,
    deleteUser,
    findUser,
};
