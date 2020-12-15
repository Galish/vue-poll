<template>
	<custom-button
		@click="deleteItem"
	>
		X
	</custom-button>
</template>

<script>
import CustomButton from '@/components/Form/Button'

export default {
	name: 'DeleteButton',
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
		index: {
			type: Number,
			default: 0
		}
	},
	methods: {
		deleteItem() {
			const newValue = [ ...this.modelValue ]
			newValue.splice(this.index, 1)

			this.$emit('update:modelValue', newValue)
		}
	}
}
</script>

<style scoped>
button {
	margin-left: 20px;
}
</style>
