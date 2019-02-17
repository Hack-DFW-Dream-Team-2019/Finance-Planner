<template>
    <div>
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
    </div>
</template>

<script>
export default {
    
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
