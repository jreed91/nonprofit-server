const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const organizationSchema = new Schema( {
    name: { type: String, required: true },
    description: { type: String, required: true },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    address: { type: String, required: false },
    website: { type: String, required: false },
    aboutUs: { type: String, required: false },
    orgThumbnail: { type: String, required: false }
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "Organization", organizationSchema );
