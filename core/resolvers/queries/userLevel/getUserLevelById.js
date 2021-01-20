module.exports = async (parent, {id}, { dataSource }, info) => {
    return await dataSource.userLevelAPI.getUserLevelById(id);
}