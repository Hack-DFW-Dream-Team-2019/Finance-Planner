import Axios from 'axios';

function getOccupationSalary(occupation_code="111021", year="2018") {
  Axios.get('http://us-central1-finance-planner-54bcf.cloudfunctions.net/getOccupationSalary',
    {
      params: {
        occupation_code: occupation_code,
        year:year,
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
