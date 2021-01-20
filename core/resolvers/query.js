const users = require('./queries/user/users');
const getUserByUserNameAndPassword = require('./queries/user/getUserByUserNameAndPassword');
const userLevels = require('./queries/userLevel/userLevels');
const getUserLevelById = require('./queries/userLevel/getUserLevelById');

module.exports = {
    //User Collection
    getUserByUserNameAndPassword,
    users, 

    //User Level Collection
    getUserLevelById,
    userLevels,
}