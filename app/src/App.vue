<template>
	<div id="app">
		<div class="top-nav">
			<div id="logo">
				<img   src="https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg"/>
				</div>
				<h3 id="second-header">Finance Planner</h3>
			<div id="profile">
				<i class="fa fa-user-circle"></i>
				<i class="fa fa-caret-down"></i>
			</div>
		</div>
		<div class="side-nav">
			<router-link to="/education">
				<button><i class="fas fa-graduation-cap"></i></button>
			</router-link>			
			<router-link to="/simulation">
				<button><i class="fas fa-flask"></i></button>
			</router-link>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<style lang="scss">
	html, body, #app{
		margin: 0;
		height: 100%;
		background-color: #F2F2F3;
	}
	.content{
		margin-left: 50px;
	}
	.top-nav{
		border-bottom: 1px solid black;
		height: 74px;
		background-color:#ffffff;
		padding-left: 25px;
	}
	.fa-graduation-cap {
		color: #F8CC01;
	}
	.side-nav{
		position: absolute;
		padding-top: 20px;
		text-align: center;
		height: 100%;
		width: 50px;
		background-color: #213443;
	}
	#logo, #second-header, #profile{
		display: inline-block;
		width: 33%;
		height: 100%;
	}

	#profile{
		text-align: right;
	}

	#logo img{
	 margin-left: 0;
	 width: 100px;
	 height: 100%;
	}

	#second-header{
		text-align: center;
	}
	button{
		width: 100%;
		height: 50px;
		border: none;
		outline: none;
		background-color: #213443;
	}	
	button:hover{
		cursor: pointer;
		background: #c5c4c5;
	}
	a{
		color: black;
	}
	i{
		font-size: 1.2rem;
	}

	.fa-flask {
		color: white;
	}
</style>
