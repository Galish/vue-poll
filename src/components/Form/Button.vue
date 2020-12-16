<template>
	<router-link
		v-if="linkTo"
		class="button button--link"
		:class="className"
		:to="linkTo"
	>
		<slot />

		<Icon
			v-if="icon"
			:icon="icon"
		/>
	</router-link>

	<button
		v-else
		class="ui button"
		:class="[className, color, size, { 'icon basic': icon}]"
	>
		<slot />

		<Icon
			v-if="icon"
			:icon="icon"
		/>
	</button>
</template>

<script>
import Icon from '@/components/Icon'

export default {
	name: 'Button',
	components: {
		Icon
	},
	props: {
		className: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: ''
		},
		linkTo: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: ''
		},
	}
}
</script>

<style scoped>
.button {}
.button--link {
	text-decoration: none;
}
</style>
