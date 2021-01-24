module.exports = async (parent, args, { rootValue }, info) => {
    return await rootValue.userLocationMappingAPI.getCollections().populate({
        path: 'userLevel'
    })
    .populate({
        path: 'location'
    });
}