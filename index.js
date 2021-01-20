const { ApolloServer, ApolloError } = require('apollo-server');
const resolvers = require('./core/resolvers/resolver');
const dbConnect = require('./core/config/dbConnect');
const dataSources = require('./core/datasources/datatsource');
const typeDefs = require('./core/schemas/schemas');
const dotenv = require('dotenv');
const devPORT = 4000;


dotenv.config({ path: './.env' });

const port = process.env.PORT || devPORT;

console.info('Starting to connect in Mongo DB...')
dbConnect();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    // debug: false,
    // formatError: (err) => {
    //     return new ApolloError("We are having some trouble", "ERROR", {message: err.message});
    // }
});

server
    .listen({
        port
    })
    .then(({ url }) => {
        console.log(`graphQL running at ${url}`);
    });