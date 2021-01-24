const UserLocationMappingCollection = require('../../collections/userLocationMappingCollection');
const BasicMongoAction = require('../BasicMongoAction');

const UserLocationMappingAPI = Base => class extends Base {

    constructor() {
        super(UserLocationMappingCollection);
    }
}

module.exports = UserLocationMappingAPI(BasicMongoAction);