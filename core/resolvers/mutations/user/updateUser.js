const { mongo } = require('mongoose');
const populateUserLevel = require('../../../../helper/dataSource/populateUserLevel');
const populateStatus = require('../../../../helper/dataSource/populateStatus');

module.exports = async ( args, parent, { rootValue }, info) => {
    const { user } = args;
    const { userAPI, statusAPI, userLevelAPI } = rootValue;

    const _id = mongo.ObjectId(user._id);
    
    if (user.status != undefined) {
        const status = await statusAPI.getOneCollectionByFields({ status: user.status});
        user = {
            ...user,
            _id,
            status: mongo.ObjectId(status._id)
        }
    }

    if (user.userLevel != undefined) {
        const userLevel = await userLevelAPI.getOneCollectionByFields({ level: (user.userLevel != undefined ? user.userLevel : process.env.USER_LEVEL_DEFAULT)});

        user = {
            ...user,
            _id,
            userLevel: mongo.ObjectId(userLevel._id)
        }
    }
    await userAPI.updateCollection(user)
    return await populateStatus(populateUserLevel(userAPI.getCollectionById(user._id)));

}