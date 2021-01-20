const { mongo } = require('mongoose');

module.exports = async (parent, { user }, { dataSources }, info) => {
    const { userAPI, statusAPI } = dataSources;

    const _id = mongo.ObjectId(user._id);

    if (user.status > -1) {
        const status = await statusAPI.getStatus(user.status);
        return await userAPI.updateUser({
            ...user,
            _id,
            status: mongo.ObjectId(status._id)
        });
    }

    return await userAPI.updateUser({
        ...user,
        _id,
    });

}