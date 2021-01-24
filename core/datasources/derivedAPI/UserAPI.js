const { DataSource } = require('apollo-datasource');
const UserCollection = require('../../collections/userCollection');
const _ = require('lodash');
const populateStatus = require('../../../helper/dataSource/populateStatus');
const populateUserLevel = require('../../../helper/dataSource/populateUserLevel');
const BasicMongoAction = require('../BasicMongoAction');

const UserAPI = Base => class extends Base {

    constructor() {
        super(UserCollection);
    }

    async getUserByUserNameAndPassword(userName, password) {
        const users = await populateUserLevel(
            populateStatus(this.getCollections())
        );

        const user = users.find(i => i.userName.toLowerCase() == userName.toLowerCase() && i.password == password);

        return user;
    }

}

module.exports = UserAPI(BasicMongoAction);
