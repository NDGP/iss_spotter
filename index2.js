const request = require('request-promise-native');
const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss_promised');



// fetchMyIP()
// .then(fetchCoordsByIP)
// .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

  
  nextISSTimesForMyLocation()
  .then(body => console.log(body))
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
  