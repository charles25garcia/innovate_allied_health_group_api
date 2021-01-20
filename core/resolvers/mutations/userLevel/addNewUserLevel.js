const { ApolloError } = require("apollo-server");

module.exports = async (parent, { userLevel }, { dataSources }, info) => {
    const { userLevelAPI, statusAPI } = dataSources;

    const status = await statusAPI.getStatus(userLevel.status | process.env.STATUS_COLLECTION_ACTIVE_NUMBER);
    
    const level = await userLevelAPI.getNextLevel();

    return await userLevelAPI.addNewUserLevel({
        ...userLevel,
        level,
        status
    });
   
}