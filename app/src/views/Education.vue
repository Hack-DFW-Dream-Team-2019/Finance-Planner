<template>
    <div>
        <p>Annual average salary for this occupation: {{average}}</p>

        <button type="button" @click="getOccupationData()" name="button"></button>
    </div>
</template>

<script>
import occupationsApi from '../helpers/occupationsApi.js'
export default {
    data: function() {
      return{
        occupation_code: null,
        year: "2018",
        average:""
      }
    },
    methods: {
      getOccupationData: async function(){
        let avg = this.average
        await occupationsApi.getAverageSalary(this.occupation_code, this.year).then(function (response) {
          avg = response;
        });
        this.average = avg
      }
    }
}
</script>

<style lang="scss" scoped>
    .education-side-nav{
		padding-left: 50px;
		position: absolute;
		padding-top: 20px;
		text-align: left;
		height: 100%;
		background-color:#334452;
		width: 250px;
	}

	.education-side-nav a {
		color: white;
	}
    .content {
        margin-left: 200px;
    }

	.education-title{
		color: white;
		margin-bottom: 75px;
	}


</style>
