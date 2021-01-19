const { gql } = require("apollo-server");
const query = require('./actionTypes/query');
const user = require('./types/user');
const status = require('./types/status');
const userLevel = require('./types/userLevel');
const mutation = require('./actionTypes/mutation');

const schemas = [
    mutation,
    query,
    status,
    user,
    userLevel
];

module.exports = schemas;
