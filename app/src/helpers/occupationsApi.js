import Axios from 'axios';

const occupationsApi = {

  getOccupationData: function (occupation_code="111021", year="2018") {
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
  },

  calcAverageSalary: function (data) {
    let sum = 0;
    for( let i = 0; i < data.length; i++ ){
        sum += parseInt( data[i], 10 );
    }

    var avg = sum/data.length;
    return avg;
  },

  getOccupationSalaries: function (data, year="2018") {
    let salaryArray = [];
    data.forEach(function (salaryData) {
      if (salaryData.year === year) {
        salaryArray.push(salaryData.value);
      }
    });
    return salaryArray;
  }

}


export default occupationsApi;
