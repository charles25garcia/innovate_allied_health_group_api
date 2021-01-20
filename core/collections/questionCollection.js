const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { QUESTION_COLLECTION, STATUS_COLLECTION } = require('./collections');

const questionSchema = new Schema({
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
        required: true
    },
});

const QuestionCollection = mongoose.model( QUESTION_COLLECTION, questionSchema );

module.exports = QuestionCollection;
