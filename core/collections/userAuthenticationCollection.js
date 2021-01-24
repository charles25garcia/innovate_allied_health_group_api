const mongoose = require('mongoose');
const { Schema } = mongoose;
const { USER_COLLECTION, USER_AUTHENTICATION_COLLECTION } = require('./_collectionNames');

const userAuthenticationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: USER_COLLECTION
    },
    authenticationToken: {
        type: String,
        unique: true
    },
    secretWord: {
        type: String,
        unique: true
    },
    expirationDate: {
        type: Date
    }
});

const UserAuthenticationCollection = mongoose.model( USER_AUTHENTICATION_COLLECTION, userAuthenticationSchema);
module.exports = UserAuthenticationCollection;
