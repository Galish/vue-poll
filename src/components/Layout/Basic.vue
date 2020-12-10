<template>
	<div class="page">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'BasicLayout'
}
</script>

<style>
html, body {
	height: 100%;
}
#app {
	min-height: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background: #ebebeb;
	padding: 40px;
}
* {
	margin: 0;
	padding: 0;
}
.page {
	max-width: 800px;
	box-sizing: border-box;
	background: #fff;
	margin: auto;
	padding: 20px;
}
</style>
