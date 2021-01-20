const { mongo } = require('mongoose');

module.exports = async (parent, { user }, { dataSources }, info) => {
    const { userAPI, statusAPI } = dataSources;
    const status = await statusAPI.getStatus(user.status);

    return await userAPI.updateUser({
        ...user,
        _id: mongo.ObjectId(user._id),
        status: mongo.ObjectId(status._id)
    });
}