const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { TEMPLATE_COLLECTION, USER_TEMPLATE_COLLECTION, USER_LEVEL_COLLECTION } = require('./collections');

const userTemplateShema = new Schema({
    template: {
        type: Schema.Types.ObjectId,
        ref: TEMPLATE_COLLECTION
    },
    userLevel: {
        type: Schema.Types.ObjectId,
        ref: USER_LEVEL_COLLECTION
    }    
});

const UserTemplateCollection = mongoose.model( USER_TEMPLATE_COLLECTION, userTemplateShema);

module.exports = UserTemplateCollection;
