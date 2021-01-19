const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const { STATUS_COLLECTION, USER_LEVEL_COLLECTION } = require('./collections');

const userLevelSchema = new Schema ({
    level: {
        type: Number,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: STATUS_COLLECTION
    },

});

const UserLevelCollection = mongoose.model(USER_LEVEL_COLLECTION, userLevelSchema);

module.exports = UserLevelCollection;
