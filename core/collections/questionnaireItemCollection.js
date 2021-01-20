const mongoose = require('mongoose');
const { Schema } = mongoose;
const { QUESTION_TYPE_COLLECTION, QUESTIONNAIRE_COLLECTION, QUESTIONNAIRE_ITEM_COLLECTION } = require('./_collectionNames');
const questionnaireItemSchema = new Schema({
    questionType: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: QUESTION_TYPE_COLLECTION
    },
    questionnaire: {
        type: Schema.Types.ObjectId,
        ref: QUESTIONNAIRE_COLLECTION
    },
    question: {
        type: String,
        required: true
    }
});

const questionnaireItemCollection = mongoose.model(QUESTIONNAIRE_ITEM_COLLECTION, questionnaireItemSchema);

module.exports = questionnaireItemCollection;