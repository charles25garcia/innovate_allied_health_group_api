module.exports = `
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
        isActive: Boolean
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
        isActive: Boolean
        status: EnumStatus
        userLevel: Int
    }
`;