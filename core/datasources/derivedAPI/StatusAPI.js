const StatusCollection = require('../../collections/statusCollection');
const BasicMongoAction = require('../BasicMongoAction');

const StatusAPI = Base => class extends Base {
    constructor() {
        super(StatusCollection);
    }
}

module.exports = StatusAPI(BasicMongoAction);