<template>
	<div class="swap-buttons">
		<icon-button
			v-if="index !== 0"
			clickable
			icon="arrow up"
			@click="swap(index - 1)"
		>
			Up
		</icon-button>

		<icon-button
			v-if="index !== lastIndex"
			clickable
			icon="arrow down"
			@click="swap(index + 1)"
		>
			Down
		</icon-button>
	</div>
</template>

<script>
import IconButton from '@/components/Icon'

export default {
	name: 'SwapButtons',
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
