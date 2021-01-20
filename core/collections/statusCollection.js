const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { STATUS_COLLECTION } = require('./_collectionNames');

const statusSchema = new Schema({
    statusName: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Number,
        required: true,
        unique: true
    }
});

const StatusCollection = mongoose.model( STATUS_COLLECTION, statusSchema );

module.exports = StatusCollection;
