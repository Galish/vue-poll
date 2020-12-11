<template>
	<div class="add-poll-button">
		<custom-button
			@click="handleClick"
		>
			+ Add question
		</custom-button>
	</div>
</template>

<script>
import CustomButton from '@/components/Form/Button'
import { blankQuestion } from '@/helpers'

export default {
	name: 'AddQuestion',
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
			const newValue = [ ...this.modelValue, blankQuestion() ]

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
