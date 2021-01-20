const { DataSource } = require('apollo-datasource');
const UserLevelCollection = require('../collections/userLevelCollection');
const populateStatus = require('./helper/populateStatus');

class UserLevelAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {

    }

    async getUserLevels() {
        return await populateStatus(UserLevelCollection.find({}));
    }

    async getUserLevelById(id) {
        return await populateStatus(UserLevelCollection.findById(id));
    }

    async addNewUserLevel(userLevel) {
        const newUserLevel = new UserLevelCollection(userLevel);
        await newUserLevel.save();
        return newUserLevel;
    }

    async updateUserLevel(userLevel) {
        const { _id } = userLevel;
        await UserLevelCollection.findByIdAndUpdate({ _id }, userLevel, { useFindAndModify: false });

        return await populateStatus(UserLevelCollection.findById(_id));
    }
}

module.exports = UserLevelAPI;