const { ObjectID } = require('mongodb');

module.exports = async (parent, { user }, { dataSources }, info) => {
    const { userAPI, statusAPI } = dataSources;
    const status = await statusAPI.getStatus(user.status);
    
    return await userAPI.updateUser({
        ...user,
        _id: new ObjectID(user._id),
        status
    });
}