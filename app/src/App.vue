<template>
	<div id="app">
		<div class="top-nav">
			<h3>Finance Planner</h3>
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
	}
	.content{
		margin-left: 50px;
	}
	.top-nav{
		border-bottom: 1px solid black;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.side-nav{
		position: absolute;
		padding-top: 20px;
		text-align: center;
		height: 100%;
		border-right: 1px solid #858585;
		width: 50px;
	}
	button{
		width: 100%;
		height: 50px;
		border: none;
		outline: none;
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
</style>
