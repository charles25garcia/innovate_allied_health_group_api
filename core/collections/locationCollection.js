const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { STATUS_COLLECTION, LOCATION_COLLECTION} = require('./_collectionNames');

const locationSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: STATUS_COLLECTION
    }
});

const LocationCollection = mongoose.model(LOCATION_COLLECTION, locationSchema);

module.exports = LocationCollection;
