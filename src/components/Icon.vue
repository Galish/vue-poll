<template>
	<i
		v-if="icon"
		class="icon"
		:class="[className, icon]"
	/>
</template>

<script>
export default {
	name: 'Icon',
	props: {
		className: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: ''
		}
	}
}
</script>
