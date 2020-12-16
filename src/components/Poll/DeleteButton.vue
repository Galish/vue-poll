<template>
	<div
		class="button"
		@click="deleteItem"
	>
		<Icon
			icon="close"
			className="icon-close"
		/>
	</div>
</template>

<script>
// import CustomButton from '@/components/Form/Button'
import Icon from '@/components/Icon'

export default {
	name: 'DeleteButton',
	components: {
		// CustomButton
		Icon
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
.button {
	cursor: pointer;
	display: inline-block;
	margin-left: 10px;
	opacity: .8;
	padding: 2px;
}
.button:hover {
	opacity: 1;
}
.icon-close {
	margin: 0;
}
</style>
