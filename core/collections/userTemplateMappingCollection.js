const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = Schema.Types;
const { USER_COLLECTION, USER_TEMPLATE_COLLECTION, USER_TEMPLATE_MAPPING_COLLECTION } = require('./_collectionNames');

const userTemplateMappingShema = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: USER_COLLECTION
    },
    userTemplate: {
        type: ObjectId,
        required: true,
        ref: USER_TEMPLATE_COLLECTION
    },
});

const userTemplateMappingCollection = mongoose.model(USER_TEMPLATE_MAPPING_COLLECTION, userTemplateMappingShema);
module.exports = userTemplateMappingCollection;
