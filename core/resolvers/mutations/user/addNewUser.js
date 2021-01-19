
module.exports = async (parent, { user }, {dataSources}, info) => {
    const { userAPI, statusAPI } = dataSources;
    const status = await statusAPI.getStatus(process.env.STATUS_COLLECTION_ACTIVE_NUMBER);
    const newUser = {
        ...user,
        status: status[0]
    };
    return await userAPI.addNewUser(newUser);
}
