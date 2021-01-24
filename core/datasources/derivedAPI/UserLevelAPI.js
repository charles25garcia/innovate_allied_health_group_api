const UserLevelCollection = require('../../collections/userLevelCollection');
const populateStatus = require('../../../helper/dataSource/populateStatus');
const BasicMongoAction = require('../BasicMongoAction');

const UserLevelAPI = Base => class extends Base {
    constructor() {
        super(UserLevelCollection);
    }

    async getNextLevel() {

        const levels = await UserLevelCollection.find({}).select('-_id level');

        const nextLevel = Math.max.apply(Math, levels.map((x) => x.level)) + 1;

        return nextLevel;
    }

}

module.exports = UserLevelAPI(BasicMongoAction);