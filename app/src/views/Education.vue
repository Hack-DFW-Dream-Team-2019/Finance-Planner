<template>
    <div>
        <p>Hello this is the education screen</p>

        <button type="button" @click="testing()" name="button"></button>
    </div>
</template>

<script>
import getSalary from '../helpers/occupationsApi.js'
export default {
    data: function() {
      return{
        occupation_code: '',
        year: '',
      }
    },
    methods: {
      testing: function(){
        getSalary(this.occupation_code, this.year)
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
