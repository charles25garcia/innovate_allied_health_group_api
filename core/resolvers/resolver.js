const Query = require('./query');
const Mutation = require('./mutation');

module.exports = {
    EnumStatus: {
        ACTIVE: 1,
        INACTIVE: 0
    },
    Query,
    Mutation,
}