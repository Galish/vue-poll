<template>
	<div class="swap-buttons">
		<custom-button
			v-if="index !== 0"
			@click="swap(index - 1)"
		>
			Up
		</custom-button>

		<custom-button
			v-if="index !== lastIndex"
			@click="swap(index + 1)"
		>
			Down
		</custom-button>
	</div>
</template>

<script>
import CustomButton from '@/components/Form/Button'

export default {
	name: 'SwapButtons',
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
	computed: {
		lastIndex() {
			return this.modelValue.length - 1
		}

	},
	methods: {
		swap(newIndex) {
			const newValue = [ ...this.modelValue ]
			const currentQuestion = newValue.splice(this.index, 1)[ 0 ]
			newValue.splice(newIndex, 0, currentQuestion)

			this.$emit('update:modelValue', newValue)
		}
	}
}
</script>

<style scoped>
.swap-buttons {
	display: inline-block;
}
.swap-buttons button:not(:first-child) {
	margin-left: 10px;
}
</style>
