const { ApolloServer, ApolloError } = require('apollo-server-express');
const resolvers = require('./core/resolvers/resolver');
const dbConnect = require('./core/config/dbConnect');
const dataSources = require('./core/datasources/datatsource');
const schema = require('./core/schemas/schemas');
const dotenv = require('dotenv');
const devPORT = 5000;
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const auth = require('./core/auth/auth');

dotenv.config({ path: './.env' });

const port = process.env.PORT || devPORT;

console.info('Starting to connect in Mongo DB...')
dbConnect();

const app = express();

app.use(auth);

app.use('/', graphqlHTTP({
    schema,
    rootValue: {
        ...resolvers,
        ...dataSources
    },
    pretty: true,
    graphiql: true,
        // formatError: (err) => {
        //     return new ApolloError("We are having some trouble", "ERROR", {message: err.message});
        // }
}));

app.listen({ port }, () => console.log(`graphQL running at port: ${port}`));
