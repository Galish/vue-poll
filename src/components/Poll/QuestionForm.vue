<template>
	<div
		class="question"
	>
		<div
			v-if="hasHeaderSlot"
			class="actions"
		>
			<slot name="header" />
		</div>

		<input-text
			v-model="question.text"
			label="Text"
		/>

		Answers:

		<answer-form
			v-for="(answer, index) in question.answers"
			:key="answer.id"
			v-model="question.answers[index]"
		>
			<delete-button
				v-model="question.answers"
				:index="index"
			/>
		</answer-form>

		<slot name="footer" />
	</div>
</template>

<script>

import AnswerForm from '@/components/Poll/AnswerForm'
import DeleteButton from '@/components/Poll/DeleteButton'
import InputText from '@/components/Form/InputText'

export default {
	name: 'QuestionForm',
	components: {
		AnswerForm,
		DeleteButton,
		InputText
	},
	props: {
		modelValue: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	computed: {
		question: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value)
			}
		},
		hasHeaderSlot() {
			return !!this.$slots.header
		}
	}
}
</script>

<style scoped>
.question {
	border: 1px solid #ebebeb;
	margin-top: 20px;
	padding: 20px;
}
.actions {
	float: right;
	margin: 0 0 20px 20px;
}
.answer-container {
	margin-top: 10px;
}
.answer-text {
	padding-top: 0;
	padding-bottom: 0;
}
</style>
