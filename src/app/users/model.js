const mongoose = require( "mongoose" );
const md5 = require( "md5" );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    sub: { type: String, required: true },
    nickname: { type: String, required: false },
    name: { type: String, required: false },
    picture: { type: String, required: false },
    updated_at: { type: String, required: false },
    email: { type: String, required: true },
    email_verified: { type: Boolean, required: false}
}, {
    timestamps: true,
} );

userSchema.methods.setPass = function( password ) {
    this.password = md5( password );
};

userSchema.methods.checkPass = function( password ) {
    return this.password === md5( password );
};

module.exports = mongoose.model( "User", userSchema );
