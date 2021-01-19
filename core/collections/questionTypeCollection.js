const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { QUESTION_TYPE_COLLECTION } = require('./collections');

const questionTypeSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    }
}); 

const QuestionTypeCollection = mongoose.model( QUESTION_TYPE_COLLECTION, questionTypeSchema );

module.exports = QuestionTypeCollection;
