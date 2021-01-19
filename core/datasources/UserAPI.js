const { DataSource } = require('apollo-datasource');
const UserCollection = require('../collections/userCollection');

class UserAPI extends DataSource {

    constructor() {
        super();
    }

    initialize(config) {

    }

    async getUsers() {
        return await UserCollection.find({});
    }

    async getUserByUserNameAndPassword({ userName, password }) {
        return await UserCollection.find({ userName, password });
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
        console.log(user)
        return await UserCollection.findByIdAndUpdate({ _id: user._id }, user);
    }

}

module.exports = UserAPI;
