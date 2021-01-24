const { mongo } = require('mongoose');
const populateStatus = require('../../../../helper/dataSource/populateStatus');

module.exports = async ( args, parent, { rootValue }, info ) => {
    const { userLevel } = args;
    const { userLevelAPI, statusAPI } = rootValue;
    
    const _id = mongo.ObjectId(userLevel._id);

    let newUserLevel = {};
    if (userLevel.status != undefined) {
        const status = await statusAPI.getOneCollectionByFields({ status: userLevel.status });
        newUserLevel = {
            ...userLevel,
            _id,
            status: mongo.ObjectId(status._id)
        };
        
    } else {
        newUserLevel = {
            ...userLevel,
            _id
        }
    }
    await userLevelAPI.updateUserLevel(newUserLevel);

    return await populateStatus(userLevelAPI.getCollectionById(newUserLevel._id));
} 