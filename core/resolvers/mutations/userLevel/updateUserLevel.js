const { mongo } = require('mongoose');

module.exports = async ( parent, { userLevel }, { dataSources }, info ) => {
    const { userLevelAPI, statusAPI } = dataSources;
    
    const _id = mongo.ObjectId(userLevel._id);

    if (userLevel.status > -1) {
        const status = await statusAPI.getStatus(userLevel.status);
        return await userLevelAPI.updateUserLevel({
            ...userLevel,
            _id,
            status: mongo.ObjectId(status._id)
        });
    }
   
    return await userLevelAPI.updateUserLevel({
        ...userLevel,
        _id
    });
} 