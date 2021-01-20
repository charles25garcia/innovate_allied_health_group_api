const { gql } = require("apollo-server");

module.exports = gql`
    type UserLevel {
        _id: String
        level: Int
        levelName: String
        dateCreated: Date
        status: Status
    }
    input UserLevelInput {
        _id: String
        levelName: String
        dateCreated: Date
        status: EnumStatus
    }
`;
