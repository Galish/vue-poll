<template>
	<icon-button
		icon="close"
		className="icon-close"
		clickable
		@click="deleteItem"
	/>
</template>

<script>
import IconButton from '@/components/Icon'

export default {
	name: 'DeleteButton',
	components: {
		IconButton
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
.icon-close {
	margin-left: 10px;
}
</style>
