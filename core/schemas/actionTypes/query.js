const { gql } = require("apollo-server");

module.exports = gql`
    scalar Date
    type Query {
        getUserByUserNameAndPassword(userName: String, password: String): User
        users: [User]

        getUserLevelById(id: String): UserLevel
        userLevels: [UserLevel]
    }
`;