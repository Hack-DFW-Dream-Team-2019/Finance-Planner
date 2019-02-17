const axios = require('axios');

const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.getOccupationSalary = functions.https.onRequest((request, response) => {
 let occupation_code = request.query.occupation_code;
 let year = request.query.year;

 let results = axios.get('https://api.bls.gov/publicAPI/v1/timeseries/data/LAUCN040010000000005',
   {
     params: {
       occupation_code: occupation_code,
       startyear:year,
       endyear:year
     }
   })
   .then((response) => {
     console.log(response);
     return response;
   })
   .catch((error) => {
     console.log(error);
     return error;
   });
   return response.send(results);
});
