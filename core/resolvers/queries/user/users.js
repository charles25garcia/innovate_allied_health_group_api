const populateStatus = require("../../../../helper/dataSource/populateStatus");
const populateUserLevel = require("../../../../helper/dataSource/populateUserLevel");

module.exports = async (parent, args, { rootValue }, info) => {
    return await populateUserLevel(populateStatus(rootValue.userAPI.getCollections()));
};
