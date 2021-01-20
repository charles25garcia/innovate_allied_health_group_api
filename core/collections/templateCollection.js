const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { STATUS_COLLECTION, TEMPLATE_COLLECTION} = require('./_collectionNames');

const templateSchema = new Schema({
    template: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String,
        required: Date
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: STATUS_COLLECTION
    }
});

const TemplateCollection = mongoose.model(TEMPLATE_COLLECTION, templateSchema);

module.exports = TemplateCollection;
