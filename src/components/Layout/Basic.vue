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
body {
	background: #ebebeb;
}
.page {
	max-width: 800px;
	box-sizing: border-box;
	background: #fff;
	margin: auto;
	padding: 20px;
}
</style>
