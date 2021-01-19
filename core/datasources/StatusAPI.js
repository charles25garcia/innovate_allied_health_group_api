const { DataSource } = require('apollo-datasource');
const StatusCollection = require('../collections/statusCollection');

class StatusAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        
    }

    async getStatus(status) {
        return await StatusCollection.find({ status });
    }
}

module.exports = StatusAPI;