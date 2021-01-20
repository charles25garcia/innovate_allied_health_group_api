const populateStatus = async (collection) => {
    return await collection
        .select('-__v')
        .populate(
            {
                path: 'status',
                select: '-__v',
            }
        );
}

module.exports = populateStatus;