<template>
    <div>
<<<<<<< HEAD
        <p>Hello this is the education screen</p>

        <button type="button" @click="testing()" name="button"></button>
||||||| merged common ancestors
        <p>Hello this is the education screen</p>
=======
        <div class="education-side-nav">
 			<h5 class="education-title">Education</h5>
            <router-link to="/education/introduction">
				<p>Introduction</p>
			</router-link>			
			<router-link to="/education/finance">
				<p>Finance 101</p>
			</router-link>
            <router-link to="/education/loans">
				<p>Loan Options</p>
			</router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
>>>>>>> 3b9c0e04f3878a5faa2cc85281871cecd541adfc
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
