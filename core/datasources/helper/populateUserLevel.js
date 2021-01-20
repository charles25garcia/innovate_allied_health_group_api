const populateUserLevel = (collection) => {
    return collection
        .populate(
            {
                path: 'userLevel',
                select: '-__v',
                populate: {
                    path: 'status',
                    select: '-__v',
                }
            }
        );
}

module.exports = populateUserLevel;