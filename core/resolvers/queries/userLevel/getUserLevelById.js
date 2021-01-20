module.exports = async (parent, {id}, { dataSources }, info) => {
    return await dataSources.userLevelAPI.getUserLevelById(id);
}