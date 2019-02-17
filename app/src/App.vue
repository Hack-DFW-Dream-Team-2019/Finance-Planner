<template>
	<div id="app">
		<div class="top-nav">
			<div class="logo">
				<img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg"/>
				<h3>Finance Planner</h3>
			</div>
			<div class="profile">
				<i style="font-size: 25px; margin-right: 5px" class="fa fa-user-circle"></i>
				<i style="font-size: 17px; margin-right: 5px" class="fa fa-caret-down"></i>
			</div>
		</div>
		<div class="side-nav">
			<router-link to="/education">
				<button><i class="fas fa-graduation-cap"></i></button>
			</router-link>			
			<router-link to="/calculator">
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
		height: 100%;
	}
	.logo{
		display: flex;
		align-items: center;

		img{
			width: 100px;
		}
		h3{
			font-size: .9rem;
			margin-left: 30px;
			margin-top: 15px;
		}
	}
	.profile{
		display: flex; 
		align-items: center;
	}
	.top-nav{
		display: flex;
		justify-content: space-between;
		height: 55px;
		background-color:#ffffff;
		padding-left: 25px;
	}

	.side-nav{
		position: absolute;
		padding-top: 25px;
		text-align: center;
		height: 100%;
		width: 50px;
		background-color: #213443;
		z-index: 3;
		i{
			font-size: 1.2rem;
			color: white;
		}
	}

	a{
		margin-top: 15px;
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
		outline: none;
	}
	button:focus {outline: 0}

	a{
		color: black;
	}

</style>
