module.exports = `
    type Mutation {
        addNewUser(user: UserInput): User
        updateUser(user: UserInput): User
        
        addNewUserLevel(userLevel: UserLevelInput): UserLevel
        updateUserLevel(userLevel: UserLevelInput): UserLevel
    }
`;
