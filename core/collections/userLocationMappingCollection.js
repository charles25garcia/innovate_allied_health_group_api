const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = Schema.Types;
const { USER_LEVEL_COLLECTION, LOCATION_COLLECTION, USER_LOCATION_MAPPING_COLLECTION } = require('./_collectionNames');

const userLocationMappingShema = new Schema({
    userLevel: {
        type: ObjectId,
        required: true,
        ref: USER_LEVEL_COLLECTION
    },
    location: {
        type: ObjectId,
        required: true,
        ref: LOCATION_COLLECTION
    },
});

const UserLocationMappingCollection = mongoose.model(USER_LOCATION_MAPPING_COLLECTION, userLocationMappingShema);
module.exports = UserLocationMappingCollection;
