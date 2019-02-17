const req = require('request');

const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.getOccupationSalary = functions.https.onRequest((request, response) => {
 let occupation_code = request.query.occupation_code;
 let year = request.query.year;
 let url = `https://api.bls.gov/publicAPI/v1/timeseries/data/LAUCN040010000000005`;
 url+= `?occupation_code=${occupation_code}&startyear=${year}&endyear=${year}`
 let options = {
  url: url
  };
  // make the request
  req(options, (error, res, body) => {
      if (!error && response.statusCode === 200) {
        console.log(res);
        response.set('Access-Control-Allow-Origin', '*');
        response.send(JSON.parse(body));
      } else {
        console.log(error)
      }
  })
});
