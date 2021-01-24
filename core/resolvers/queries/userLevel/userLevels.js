const populateStatus = require("../../../../helper/dataSource/populateStatus");

module.exports = async (parent, args, { rootValue }, info) => {
    return await populateStatus(rootValue.userLevelAPI.getCollections());
}