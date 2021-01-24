const Query = require('./query');
const Mutation = require('./mutation');

module.exports = {
    EnumStatus: {
        ENABLE: 1,
        DISABLE: 0
    },
    ...Query,
    ...Mutation,
}