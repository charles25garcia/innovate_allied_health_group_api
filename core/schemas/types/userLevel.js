const { gql } = require("apollo-server");

module.exports = gql`
    type UserLevel {
        level: Int
        discription: String
        dateCreated: Date
        status: Status
    }
    input UserLevelInput {
        level: Int
        discription: String
        dateCreated: Date
        status: StatusInput
    }
`;
