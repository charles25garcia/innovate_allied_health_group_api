const { gql } = require("apollo-server");

module.exports = gql`
    type Mutation {
        addNewUser(user: UserInput): User
        updateUser(user: UserInput): User
        
        addNewUserLevel(userLevel: UserLevelInput): UserLevel
        updateUserLevel(userLevel: UserLevelInput): UserLevel
    }
`;
