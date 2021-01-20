const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { ANSWER_COLLECTION, QUESTIONNAIRE_MAPPING_COLLECTION } = require('./_collectionNames');
const { ObjectId } = Schema.Types;
const answerSchema = new Schema({
    questionnaireMapping: {
        type: ObjectId,
        required: true,
        ref: QUESTIONNAIRE_MAPPING_COLLECTION
    },
    value: {
        type: String,
        required: true
    }
});

const answerCollection = mongoose.model(ANSWER_COLLECTION, answerSchema);

module.exports = answerCollection;