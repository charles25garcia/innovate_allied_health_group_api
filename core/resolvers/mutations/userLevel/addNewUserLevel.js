const { ApolloError } = require("apollo-server");

module.exports = async (parent, { userLevel }, { dataSources }, info) => {
    const { userLevelAPI, statusAPI } = dataSources;
    const status = await statusAPI.getStatus(process.env.STATUS_COLLECTION_ACTIVE_NUMBER);
    return await userLevelAPI.addNewUserLevel({
        ...userLevel,
        status
    });
   
}