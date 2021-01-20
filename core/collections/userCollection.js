const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { USER_COLLECTION, USER_LEVEL_COLLECTION, STATUS_COLLECTION } = require('./collections');

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    lastLoging: {
        type: Date,
    }, 
    lastLogout: {
        type: Date,
    }, 
    dateCreated: {
        type: Date,
        required: true
    }, 
    isActive: {
        type: Boolean
    }, 
    status: {
        type: Schema.Types.ObjectId,
        ref: STATUS_COLLECTION,
        required: true
    }, 
    userLevel: {
        type: Schema.Types.ObjectId,
        ref: USER_LEVEL_COLLECTION
    }, 
});

const UserCollection = mongoose.model(USER_COLLECTION, userSchema);

module.exports = UserCollection;
