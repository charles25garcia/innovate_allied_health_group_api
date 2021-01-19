const { gql } = require("apollo-server");

module.exports = gql`
    type Status {
        statusName: String
        status: Int
    }
    input StatusInput {
        statusName: String
        status: Int
    }
`;