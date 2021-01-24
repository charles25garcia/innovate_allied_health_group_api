const StatusAPI = require("./derivedAPI/StatusAPI");
const UserAPI = require("./derivedAPI/userAPI");
const UserLevelAPI = require("./derivedAPI/UserLevelAPI");
const LocationAPI = require('./derivedAPI/LocationAPI');
const UserLocationMappingAPI = require('./derivedAPI/UserLocationMappingAPI');

const dataSource =  {
    locationAPI: new LocationAPI(),
    statusAPI: new StatusAPI(),
    userAPI: new UserAPI(),
    userLevelAPI: new UserLevelAPI(),
    userLocationMappingAPI: new UserLocationMappingAPI()
};

module.exports = dataSource;