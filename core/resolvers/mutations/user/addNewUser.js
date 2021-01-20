const { ApolloError } = require("apollo-server");

module.exports = async (parent, { user }, { dataSources }, info) => {
    try {
        const { userAPI, statusAPI } = dataSources;
        const status = await statusAPI.getStatus(process.env.STATUS_COLLECTION_ACTIVE_NUMBER);
        const newUser = {
            ...user,
            status: status
        }
        return await userAPI.addNewUser(newUser);
    } catch (error) {
        throw new ApolloError(error);
    }
}
