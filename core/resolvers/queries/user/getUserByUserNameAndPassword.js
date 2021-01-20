module.exports = async ( parent, { userName, password }, { dataSources }, info ) => {

    return await dataSources.userAPI.getUserByUserNameAndPassword(userName, password);

}