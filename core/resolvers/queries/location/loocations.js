module.exports = async (parent , args, { rootValue }, info ) => {
        return await rootValue.locationAPI.getCollections();
}