const LocationCollection = require('../../collections/locationCollection');
const BasicMongoAction = require('../BasicMongoAction');

const LocationAPI = Base => class extends Base {
    constructor() {
        super(LocationCollection);
    }
}

module.exports = LocationAPI(BasicMongoAction);