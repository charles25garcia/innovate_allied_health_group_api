module.exports = async (parent, args, { dataSources }, info) => {
    return await dataSources.userLevelAPI.getUserLevels();
}