<template>
	<checkbox
		v-model="answer.is_correct"
		class="answer-container"
	>
		<input-text
			v-model="answer.text"
			className="answer-text"
			multiline
		/>
	</checkbox>
</template>

<script>
import Checkbox from '@/components/Form/Checkbox'
import InputText from '@/components/Form/InputText'

export default {
	name: 'AnswerForm',
	components: {
		Checkbox,
		InputText
	},
	props: {
		modelValue: {
			type: Object,
			default() {
				return {}
			}
		},
	},
	computed: {
		answer: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			}
		}
	}
}
</script>

<style>
.answer-text.input-text {
	padding-top: 0;
	padding-bottom: 0;
}
</style>
