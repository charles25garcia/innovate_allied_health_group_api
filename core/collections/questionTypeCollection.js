const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { QUESTION_TYPE_COLLECTION } = require('./_collectionNames');

const questionTypeSchema = new Schema({
    type: {
        type: String,
        required: true,
        unique: true
    },
    uiControl: {
        type: String,
        required: true
    },
    allowMultipleSelection: {
        type: Boolean
    },
    typeName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    }
}); 

const QuestionTypeCollection = mongoose.model( QUESTION_TYPE_COLLECTION, questionTypeSchema );

module.exports = QuestionTypeCollection;
