import Axios from 'axios';

const occupationsApi = {

  getAverageSalary: function (occupation_code="111021", year="2018") {
    let data = Axios.get('http://us-central1-finance-planner-54bcf.cloudfunctions.net/getOccupationSalary',
      {
        params: {
          occupation_code: occupation_code,
          year:year,
        }
      })
      .then(function (response) {
        // console.log("data", response);
        // get the all average salaries for the selected year
        let salaryArray = [];
        response.data.Results.series[0].data.forEach(function (salaryData) {
          // console.log("salary year", salaryData.year, "expected year:", year);
          if (salaryData.year === year) {
            // console.log("salary hit");
            salaryArray.push(salaryData.value);
          }
        });
        // console.log("salaryArray:", salaryArray);
        //calculate the average salary for that year
        let sum = 0;
        for( let i = 0; i < salaryArray.length; i++ ){
            sum += parseInt( salaryArray[i], 10 );
        }
        var avg = sum/salaryArray.length;
        // console.log("average:", avg);

        return avg;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
    return data;
  },
  //
  // calcAverageSalary: function (data) {
  //   let sum = 0;
  //   for( let i = 0; i < data.length; i++ ){
  //       sum += parseInt( data[i], 10 );
  //   }
  //
  //   var avg = sum/data.length;
  //   return avg;
  // },
  //
  // getOccupationSalaries: function (data, year="2018") {
  //   let salaryArray = [];
  //   data.forEach(function (salaryData) {
  //     if (salaryData.year === year) {
  //       salaryArray.push(salaryData.value);
  //     }
  //   });
  //   return salaryArray;
  // }

}


export default occupationsApi;
