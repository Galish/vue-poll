<template>
	<i
		v-if="icon"
		class="icon"
		:class="[className, icon, {'icon--clickable': clickable}]"
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
		clickable: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: ''
		}
	}
}
</script>

<style>
.icon--clickable.icon {
	cursor: pointer;
	opacity: .8;
	padding: 3px 2px;
	box-sizing: initial;
}
.icon--clickable.icon:hover {
	opacity: 1;
}
</style>
