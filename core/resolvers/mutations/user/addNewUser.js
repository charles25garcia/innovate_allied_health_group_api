const { ApolloError } = require("apollo-server");

module.exports = async (args, parent, { rootValue }, info) => {
    try {
        const { user } = args;
        const { userAPI, statusAPI, userLevelAPI } = rootValue;

        const status = await statusAPI.getOneCollectionByFields({ status: user.status | process.env.STATUS_COLLECTION_ACTIVE_NUMBER });

        const userLevel = user.userLevel != undefined ? await userLevelAPI.getOneCollectionByFields({ level: user.userLevel }) : await userLevelAPI.getOneCollectionByFields({ level: process.env.USER_LEVEL_DEFAULT })
        const newUser = {
            ...user,
            status: status,
            userLevel
        }
        return await userAPI.addCollection(newUser);
    } catch (error) {
        throw new ApolloError(error);
    }
}
