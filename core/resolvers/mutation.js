const addNewUser = require('./mutations/user/addNewUser');
const updateUser = require('./mutations/user/updateUser');
const addNewUserLevel = require('./mutations/userLevel/addNewUserLevel');
const updateUserLevel = require('./mutations/userLevel/updateUserLevel');

module.exports = {
    //User Collection
    addNewUser,
    updateUser,

    //User Level Collection
    addNewUserLevel,
    updateUserLevel
}
