const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = (body) => {
  let coords = JSON.parse(body).ip
  return request(`http://ip-api.com/json/${coords}`)
}

const fetchISSFlyOverTimes = (body) => {
  let CoordJSON = JSON.parse(body);
  let myCoordssObj = {
      latitude: CoordJSON.lat,
      longitude: CoordJSON.lon
    };
    return request(`http://api.open-notify.org/iss-pass.json?lat=${myCoordssObj.latitude}&lon=${myCoordssObj.longitude}`)
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const flyoverObj = JSON.parse(body);
      let list = flyoverObj.response
      return list;
    });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation};