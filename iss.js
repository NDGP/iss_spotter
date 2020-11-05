const { error } = require('console');
const request = require('request');

const fetchMyIP = function(callback) { 
  request('https://api.ipify.org?format=json', (err, response, body) => {
    if (err) {
      callback(err.message, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip
    callback(null, ip);
    
    return; 
  });
};

const fetchCoordsByIP = (IP, callback) => {
  request(`http://ip-api.com/json/99.224.204.91`, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP.`;
      callback(Error(msg), null);
      return;
    }
  
    let CoordJSON = JSON.parse(body);
    let myCoordssObj = {
      latitude: CoordJSON.lat,
      longitude: CoordJSON.lon
    };
    callback(null, myCoordssObj);
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=43.6508&lon=-79.4803`, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP.`;
      callback(Error(msg), null);
      return;
    }
    let flybyJSON = JSON.parse(body);
    let flyByObj = flybyJSON.response;
    callback(null, flyByObj);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        return callback(error, null);
      }

      // fetchISSFlyOverTimes(loc, (error, nextPasses) => {
      //   if (error) {
      //     return callback(error, null);
      //   }

        callback(null, nextPasses);
      });
    });
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation};