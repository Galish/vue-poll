<template>
	<div
		class="wrapper"
		:class="className"
	>
		<label
			v-if="label"
			class="label"
		>
			{{ label }}
		</label>

		<slot />

		<div
			v-if="description"
			class="description"
		>
			{{ description }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'InputWrapper',
	props: {
		className: {
			type: String,
			default: ''
		},
		description: {
			type: String,
			default: ''
		},
		label: {
			type: String,
			default: ''
		}
	}
}
</script>

<style scoped>
.wrapper {
	padding: 10px 0;
}
.label {
	font-weight: bold;
	display: block;
	padding-bottom: 5px;
}
.description {
	font-size: 0.75em;
	color: #999;
	display: block;
	padding-top: 5px;
}
</style>
