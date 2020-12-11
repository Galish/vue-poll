<template>
	<div class="add-poll-button">
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
.add-poll-button {
	text-align: center;
	padding: 10px;
}
</style>
