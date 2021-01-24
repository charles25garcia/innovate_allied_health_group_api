const { ApolloError } = require("apollo-server");

module.exports = async ( args, parent, { rootValue }, info) => {
    const { userLevel } = args;
    const { userLevelAPI, statusAPI } = rootValue;

    const status = await statusAPI.getOneCollectionByFields({ status: userLevel.status | process.env.STATUS_COLLECTION_ACTIVE_NUMBER});
    
    const level = await userLevelAPI.getNextLevel();

    return await userLevelAPI.addCollection({
        ...userLevel,
        level,
        status
    });
   
}