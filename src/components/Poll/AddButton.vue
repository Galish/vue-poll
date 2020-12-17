<template>
	<div
		class="add-button"
		:class="className"
	>
		<custom-button
			@click="handleClick"
		>
			<slot />
		</custom-button>
	</div>
</template>

<script>
import CustomButton from '@/components/Form/Button'

export default {
	name: 'AddButton',
	components: {
		CustomButton
	},
	props: {
		className: {
			type: String,
			default: ''
		},
		modelValue: {
			type: Object,
			default() {
				return {}
			}
		},
		newItem: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		handleClick() {
			const newValue = [ ...this.modelValue, this.newItem ]

			this.$emit('update:modelValue', newValue)
		}
	}
}
</script>

<style scoped>
.add-button {
	text-align: center;
	padding: 10px;
}
</style>
