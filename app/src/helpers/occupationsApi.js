import Axios from 'axios';

function getOccupationSalary(occupation_code, year="2018") {
  Axios.get('https://api.bls.gov/publicAPI/v1/timeseries/data/LAUCN040010000000005',
    {
      params: {
        occupation_code: occupation_code,
        startyear:year,
        endyear:year
      }
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

export default getOccupationSalary;
