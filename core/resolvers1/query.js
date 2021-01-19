module.exports = {
    sessions: (parent, args, { dataSources }, info) => dataSources.sessionAPI.getSessions(args),
    sessionById: (parent, { id }, { dataSources }, info) => {
        try {
            return  dataSources.sessionAPI.getSessionById(id);
        } catch (error) {
            return {
                code: 'ERROR',
                message: "An error occured",
                token: "jsf"
            }
        }
    },
    speakers: (parent, args, { dataSources }, info) => dataSources.speakerAPI.getSpeakers(),
    speakerById: (parent, { Id }, { dataSources }, info) => dataSources.speakerAPI.getSpeaker(id),
}