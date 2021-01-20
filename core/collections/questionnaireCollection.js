const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { QUESTIONNAIRE_COLLECTION, STATUS_COLLECTION } = require('./_collectionNames');

const questionnaireSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: STATUS_COLLECTION
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    },
});

const QuestionnaireCollection = mongoose.model( QUESTIONNAIRE_COLLECTION, questionnaireSchema );

module.exports = QuestionnaireCollection;
