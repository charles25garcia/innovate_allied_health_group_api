const { gql } = require("apollo-server");

module.exports = gql`
    scalar Date
    type Query {
        users: [User]
    }
`;