import Axios from 'Axios';

function getOccupationSalary(occupation_code) {
  Axios.get('https://api.bls.gov/publicAPI/v1/timeseries/data/',
    {
      params: {
        series_id: 'LAUCN040010000000005',
        occupation_code: occupation_code
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default getOccupationSalary;
