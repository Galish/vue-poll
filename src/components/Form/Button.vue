<template>
	<router-link
		v-if="linkTo"
		class="button button--link"
		:class="className"
		:to="linkTo"
	>
		<slot />
	</router-link>

	<button
		v-else
		class="button"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		className: {
			type: String
		},
		linkTo: {
			type: String
		}
	}
}
</script>

<style scoped>
.button {
	font-size: 15px;
	color: #000;
	cursor: ;
	background-color: #ebebeb;
	display: inline-block;
	border: none;
	padding: 5px 10px;
}
.button--link {
	text-decoration: none;
}
</style>
