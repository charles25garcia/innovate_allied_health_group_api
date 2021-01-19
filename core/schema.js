const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        sessions(
            id: ID,
            title: String,
            description: String,
            startAt: String,
            endAt: String,
            room: Room,
            day: String,
            format: String,
            track: String,
            level: String
        ): [Session],
        sessionById(id: ID): SessionOrError
        speakers: [Speaker]
        speakerById(id: ID): Speaker
    }
    union SessionOrError = Session | Error
    type Speaker {
        id: ID!,
        bio: String
        name: String
        session: [Session]
    }
    type Session {
        id: ID!,
        title: String!,
        description: String,
        startAt: String,
        endAt: String,
        room: String,
        day: String,
        format: String,
        track: String @deprecated(reason: "testing"),
        level: String
        favorite: Boolean
        speakers: [Speaker]
    }
    type Mutation {
        toggleFavoriteSession(id: ID): Session 
        addNewSession(session: SessionInput): Session
    }
    input SessionInput {
        title: String!,
        description: String,
        startAt: String,
        endAt: String,
        room: String,
        day: String,
        format: String,
        track: String,
        level: String
        favorite: Boolean
    }
    enum Room {
        EUROPA
        SOL
        SATURN
    }
    type Error {
        code: String
        message: String
        token: String
    }
`;
