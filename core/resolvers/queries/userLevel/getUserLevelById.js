const populateStatus = require("../../../../helper/dataSource/populateStatus");

module.exports = async (args, parent, { rootValue }, info) => {
    const { id } = args;
    return await populateStatus(rootValue.userLevelAPI.getCollectionById(id));
}