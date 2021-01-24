const users = require('./queries/user/users');
const getUserByUserNameAndPassword = require('./queries/user/getUserByUserNameAndPassword');
const userLevels = require('./queries/userLevel/userLevels');
const getUserLevelById = require('./queries/userLevel/getUserLevelById');
const locations = require('./queries/location/loocations');
const userLocationMappings = require('./queries/useLocationMapping/userLocationMappings');

module.exports = {
    //Location Collection
    locations,

    //User Collection
    getUserByUserNameAndPassword,
    users,

    //User Level Collection
    getUserLevelById,
    userLevels,

    //User Location Mapping Collection
    userLocationMappings,
}