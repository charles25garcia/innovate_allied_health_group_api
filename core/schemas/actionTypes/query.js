module.exports = `
    scalar Date
    
    type Query {
        getUserByUserNameAndPassword(userName: String, password: String): User
        users: [User]

        getUserLevelById(id: String): UserLevel
        userLevels: [UserLevel]

        locations: [Location]
        userLocationMappings: [UserLocationMapping]
    }
`;