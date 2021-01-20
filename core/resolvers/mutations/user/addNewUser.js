const { ApolloError } = require("apollo-server");

module.exports = async (parent, { user }, { dataSources }, info) => {
    try {
        const { userAPI, statusAPI, userLevelAPI } = dataSources;

        const status = await statusAPI.getStatus(user.status | process.env.STATUS_COLLECTION_ACTIVE_NUMBER);

        const userLevel = user.userLevel ? await userLevelAPI.getUserLevelByLevel(user.userLevel) : await userLevelAPI.getUserLevelByLevel(process.env.USER_LEVEL_DEFAULT)

        const newUser = {
            ...user,
            status: status,
            userLevel
        }
        return await userAPI.addNewUser(newUser);
    } catch (error) {
        throw new ApolloError(error);
    }
}
