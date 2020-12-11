<template>
	<div class="add-poll-button">
		<custom-button
			@click="handleClick"
		>
			+ Add answer
		</custom-button>
	</div>
</template>

<script>
import CustomButton from '@/components/Form/Button'
import { blankAnswer } from '@/helpers'


export default {
	name: 'AddAnswer',
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
	},
	methods: {
		handleClick() {
			const newValue = [ ...this.modelValue, blankAnswer() ]

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
