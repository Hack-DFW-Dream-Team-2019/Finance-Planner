import Axios from 'axios';

function getOccupationSalary(occupation_code, year="2018") {
  Axios.get('https://us-central1-finance-planner-54bcf.cloudfunctions.net/getOccupationSalary',
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
