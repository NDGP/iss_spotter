const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');

fetchMyIP((error, ipAddy) =>{
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  
  console.log('It worked! Returned IP:' , ipAddy);
});

fetchCoordsByIP("99.224.204.91", (error, data) =>{
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned data:' , data);
});

fetchISSFlyOverTimes({ latitude: 43.6508, longitude: -79.4803 }, (error, data) =>{
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned ISS flyover data:' , data);
});

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  console.log(passTimes);
});
