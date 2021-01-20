const { mongo } = require('mongoose');

module.exports = async ( parent, { userLevel }, { dataSources }, info ) => {
    const { userLevelAPI, statusAPI } = dataSources;
    const status = await statusAPI.getStatus(userLevel.status);

    return await userLevelAPI.updateUserLevel({
        ...userLevel,
        _id: mongo.ObjectId(userLevel._id),
        status: mongo.ObjectId(status._id)
    });
}