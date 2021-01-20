const populateStatus = (collection) => {
    return collection
        .populate(
            {
                path: 'status',
                select: '-__v',
            }
        );
}

module.exports = populateStatus;