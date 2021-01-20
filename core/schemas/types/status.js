const { gql } = require("apollo-server");

module.exports = gql`
    type Status {
        statusName: String
        status: Int
    }
    input StatusInput {
        status: EnumStatus
    }

    enum EnumStatus {
        INACTIVE
        ACTIVE
    }
`;