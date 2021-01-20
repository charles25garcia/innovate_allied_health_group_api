const { DataSource } = require('apollo-datasource');
const UserCollection = require('../collections/userCollection');
const _ = require('lodash');
const populateStatus = require('./helper/populateStatus');
const populateUserLevel = require('./helper/populateUserLevel');

class UserAPI extends DataSource {

    constructor() {
        super();
    }

    initialize(config) {

    }

    async getUsers() {
        return await populateUserLevel(populateStatus(UserCollection.find({})));
    }

    async getUserById(_Id) {
        return await populateStatus(UserCollection.findById(_Id));
    }

    async getUserByUserNameAndPassword(userName, password) {
        const users = await this.getUsers();
        
        const user = users.find(i => i.userName.toLowerCase() == userName.toLowerCase() && i.password == password);

        return user;
    }

    async addNewUser(user) {
        const newUser = new UserCollection({
            ...user,
            status: user.status
        });
        await newUser.save();
        return newUser;
    }

    async updateUser(user) {
        await UserCollection.findOneAndUpdate({ _id: user._id }, user, { useFindAndModify: false});

        const updatedUser = await populateStatus(UserCollection.findOne({ _id: user._id }));

        return updatedUser;
    }

 

}

module.exports = UserAPI;
