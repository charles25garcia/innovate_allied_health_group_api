const StatusAPI = require("./StatusAPI");
const UserAPI = require("./userAPI");
const UserLevelAPI = require("./UserLevelAPI");

const dataSource = () => ({
    statusAPI: new StatusAPI(),
    userAPI: new UserAPI(),
    userLevelAPI: new UserLevelAPI()
})

module.exports = dataSource;