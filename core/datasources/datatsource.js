const StatusAPI = require("./StatusAPI");
const UserAPI = require("./userAPI");

const dataSource = () => ({
    statusAPI: new StatusAPI(),
    userAPI: new UserAPI(),
})

module.exports = dataSource;