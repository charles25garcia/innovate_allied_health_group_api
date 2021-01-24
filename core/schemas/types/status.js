module.exports = `
    type Status {
        statusName: String
        status: Int
    }
    input StatusInput {
        status: EnumStatus
    }

    enum EnumStatus {
        ENABLE
        DISABLE
    }
`;