module.exports = async ( args, parent, { rootValue }, info ) => {
    const { userName, password } = args;
    return await rootValue.userAPI.getUserByUserNameAndPassword(userName, password);

}