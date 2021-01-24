const { gql } = require("apollo-server");
const query = require('./actionTypes/query');
const user = require('./types/user');
const status = require('./types/status');
const userLevel = require('./types/userLevel');
const mutation = require('./actionTypes/mutation');
const location = require('./types/location');
const userLocationMapping = require('./types/userLocationMapping');

const { buildSchema } = require('graphql');
const schemas = buildSchema(`
    ${location}
    ${mutation}
    ${query}
    ${status}
    ${user}
    ${userLevel}
    ${userLocationMapping}
`);

module.exports = schemas;
