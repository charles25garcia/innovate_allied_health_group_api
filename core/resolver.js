const Query = require('./resolvers1/query');
const Session = require('./resolvers1/session');
const Mutation = require('./resolvers1/mutation')

module.exports = {
    Query,
    Session,
    Mutation,
    Room: {
        EUROPA: 'Europa',
        SOL: 'Sol',
        SATURN: 'Saturn',
       
    },
    SessionOrError: {
        __resolveType(obj) {
            if(obj.code) {
                return 'Error';
            }
            return 'Session';
        }
    }
}
