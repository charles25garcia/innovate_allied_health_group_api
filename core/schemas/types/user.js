const { gql } = require("apollo-server");


module.exports = gql`
    type User {
        _id: String
        userName: String
        password: String
        firstName: String
        lastName: String
        email: String
        lastLoging: Date
        lastLogout: Date
        dateCreated: Date
        status: Status
        userLevel: UserLevel
    }
    input UserInput {
        _id: String
        userName: String
        password: String
        firstName: String
        lastName: String
        email: String
        lastLoging: Date
        lastLogout: Date
        dateCreated: Date
        status: Int
        userLevel: Int
    }
`;